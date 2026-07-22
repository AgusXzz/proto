'use strict';

const walk = require('acorn-walk');
const { getNesting } = require('./astUtils');

const SKIPPED_PROPERTY_NAMES = new Set([
   'internalSpec',
   'internalDefaults',
   'name',
]);

/**
 * Finds every `X.someName = ...` assignment target inside a module that
 * looks like a message/enum identifier declaration (as opposed to internal
 * bookkeeping properties we don't care about).
 */
function findIdentifierAssignments(module) {
   const assignments = [];

   walk.simple(module, {
      AssignmentExpression(node) {
         // Skip computed member expressions like `enumObj[someExpr] = x`
         // (e.g. inside TS-style enum initializers) — `.property` there is
         // an expression node, not an Identifier, so `.name` is undefined.
         // Only plain `x.someName = ...` declarations are identifiers we want.
         if (node.left.computed) return;

         const propName = node.left.property?.name;
         if (propName && !SKIPPED_PROPERTY_NAMES.has(propName)) {
            assignments.push(node.left);
         }
      },
   });

   return assignments;
}

/**
 * Builds the `{ [identifierName]: { name } }` map for a module, and
 * records nesting info (which identifiers are nested under which) in the
 * shared `moduleIndentationMap` so later steps can render nested messages
 * correctly.
 */
function buildIdentifierMap(module, rename, moduleIndentationMap) {
   const assignments = findIdentifierAssignments(module);

   const makeBlankIdentifier = (assignmentNode) => {
      const key = rename(assignmentNode?.property?.name);
      const nesting = getNesting(key);

      moduleIndentationMap[key] = moduleIndentationMap[key] || {};
      moduleIndentationMap[key].indentation = nesting;

      if (nesting.length) {
         moduleIndentationMap[nesting] = moduleIndentationMap[nesting] || {};
         moduleIndentationMap[nesting].members =
            moduleIndentationMap[nesting].members || new Set();
         moduleIndentationMap[nesting].members.add(key);
      }

      return [key, { name: key }];
   };

   // Reversed to match original behaviour: later assignments for the same
   // key should not clobber the first one found.
   return Object.fromEntries(
      assignments.map(makeBlankIdentifier).reverse()
   );
}

/**
 * Finds enum value definitions (`{ NAME: id, ... }` object literals) and
 * associates them with the local alias that declares them.
 */
function findEnumAliases(module) {
   const enumAliases = {};

   walk.ancestor(module, {
      Property(node, ancestors) {
         const parent = ancestors[ancestors.length - 3];
         const grandparent = ancestors[ancestors.length - 4];

         const isInternalSpecEnum =
            parent?.type === 'AssignmentExpression' &&
            parent?.left?.property?.name === 'internalSpec' &&
            parent?.right?.properties?.length;

         if (isInternalSpecEnum) {
            const values = parent.right.properties.map((p) => ({
               name: p.key.name,
               id: p.value.value,
            }));
            // parent.left is `X.internalSpec` (a MemberExpression), so the
            // alias we want is the object being assigned onto (`X`).
            // We use .name for simple Identifiers or recursively find the name
            // for more complex objects if needed.
            const nameAlias = parent.left.object.name || parent.left.object.property?.name;
            if (nameAlias) {
               enumAliases[nameAlias] = values;
            }
            return;
         }

         const isDirectEnumDeclaration =
            node?.key?.name && grandparent && parent?.arguments?.length > 0;

         if (isDirectEnumDeclaration) {
            const values = parent.arguments[0]?.properties?.map((p) => ({
               name: p.key.name,
               id: p.value.value,
            }));
            const nameAlias = grandparent?.left?.name || grandparent?.id?.name;
            if (nameAlias && values) {
               enumAliases[nameAlias] = values;
            }
         }
      },
   });

   return enumAliases;
}

/**
 * Links each identifier to its short local alias and, if it's an enum,
 * its resolved values.
 */
function attachAliasesAndEnumValues(module, identifiers, rename, enumAliases) {
   walk.simple(module, {
      AssignmentExpression(node) {
         if (node.left.type !== 'MemberExpression' || node.left.computed) return;
         if (!node.left.property?.name) return;

         const key = rename(node.left.property.name);
         const identifier = identifiers[key];
         if (!identifier) return;

         identifier.alias = node.right.name;
         identifier.enumValues = enumAliases[identifier.alias];
      },
   });
}

module.exports = {
   buildIdentifierMap,
   findEnumAliases,
   attachAliasesAndEnumValues,
};
