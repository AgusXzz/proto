'use strict';

const walk = require('acorn-walk');
const { resolveMember, findByAlias } = require('./memberResolver');

/**
 * Groups oneof-member field declarations back under a synthetic
 * `{ type: '__oneof__', members: [...] }` entry, removing the individual
 * fields from the flat `members` array so they render nested instead of
 * duplicated at the top level.
 */
function applyOneofConstraints(constraints, members) {
   const oneofConstraint = constraints.find((c) => c.key.name === '__oneofs__');
   if (!oneofConstraint || oneofConstraint.value.type !== 'ObjectExpression') {
      return members;
   }

   const oneofs = oneofConstraint.value.properties.map((p) => ({
      name: p.key.name,
      type: '__oneof__',
      members: p.value.elements.map((e) => {
         const idx = members.findIndex((m) => m.name === e.value);
         const [member] = members.splice(idx, 1);
         return member;
      }),
   }));

   return [...members, ...oneofs];
}

/**
 * `X.internalSpec = {...}` is used for two different shapes in the wild:
 * message field declarations (`fieldName: [id, typeFlagsExpr, ...]`) and
 * enum value declarations (`VALUE_NAME: 0`). This distinguishes them so
 * enum-shaped specs are left alone here — they're already handled by
 * `findEnumAliases` — instead of being misread as message fields.
 */
function isMessageFieldShape(objectExpression) {
   const fieldProperties = objectExpression.properties.filter((p) => {
      const keyName = p.key.type === 'Identifier' ? p.key.name : p.key.value;
      return !keyName?.startsWith('__');
   });

   // An internalSpec with no field-shaped properties at all (only
   // constraint keys, or empty) isn't a message spec we can build from.
   if (!fieldProperties.length) return false;

   return fieldProperties.every((p) => p.value.type === 'ArrayExpression');
}

/**
 * Given a module's `X.internalSpec = { ... }` object expression, resolves
 * every field into `{ name, id, type, flags }` and attaches the finished
 * `members` array onto the corresponding identifier.
 */
function extractMessageSpec({
   specNode,
   identifiers,
   crossRefs,
   modulesInfo,
   rename,
   aliasMap = null,
}) {
   if (!isMessageFieldShape(specNode.right)) {
      // Enum-shaped internalSpec (e.g. `{ OK: 0, FAIL: 1 }`) — nothing to
      // do here, values already captured by findEnumAliases.
      return;
   }

   const targetIdentifier = findByAlias(identifiers, specNode.left.object.name, aliasMap);

   if (!targetIdentifier) {
      console.warn(
         `found message specification for unknown identifier alias: ${specNode.left.object.name}`
      );
      return;
   }

   const constraints = [];
   const rawMembers = [];

   for (const property of specNode.right.properties) {
      property.key.name =
         property.key.type === 'Identifier'
            ? property.key.name
            : property.key.value;

      const bucket = property.key.name.startsWith('__') ? constraints : rawMembers;
      bucket.push(property);
   }

   const resolvedMembers = rawMembers.map(({ key, value }) =>
      resolveMember({
         fieldName: key.name,
         elements: value.elements,
         messageName: targetIdentifier.name,
         identifiers,
         crossRefs,
         modulesInfo,
         rename,
         aliasMap,
      })
   );

   targetIdentifier.members = applyOneofConstraints(constraints, resolvedMembers);
}

/**
 * Walks a module for all `X.internalSpec = {...}` assignments and extracts
 * each one's members onto the matching identifier.
 */
function extractAllMessageSpecs(module, { identifiers, crossRefs, modulesInfo, rename }) {
   // Pre-build aliasMap for O(1) lookups during spec extraction
   const aliasMap = {};
   Object.values(identifiers).forEach((id) => {
      if (id.alias) aliasMap[id.alias] = id;
   });

   walk.simple(module, {
      AssignmentExpression(node) {
         const isInternalSpecObject =
            node.left.type === 'MemberExpression' &&
            node.left.property.name === 'internalSpec' &&
            node.right.type === 'ObjectExpression';

         if (!isInternalSpecObject) return;

         try {
            extractMessageSpec({
               specNode: node,
               identifiers,
               crossRefs,
               modulesInfo,
               rename,
               aliasMap,
            });
         } catch (err) {
            console.warn(
               `Failed to extract message spec for alias '${node.left.object.name}': ${err.message}`
            );
         }
      },
   });
}

module.exports = { extractAllMessageSpecs };
