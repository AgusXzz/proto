'use strict';

function findByAlias(identifiers, alias) {
   return Object.values(identifiers).find((item) => item.alias === alias);
}

function unwrapBinaryOr(node) {
   return node.type === 'BinaryExpression' && node.operator === '|'
      ? [].concat(unwrapBinaryOr(node.left), unwrapBinaryOr(node.right))
      : [node];
}

/**
 * Reads the TYPES.xxx / FLAGS.xxx member expressions attached to a field
 * declaration and returns the scalar type name plus any flags (repeated,
 * packed, etc). For `map` fields it also resolves the key/value type names.
 */
function resolveTypeAndFlags(typeFlagsExpression, identifiers) {
   let type;
   const flags = [];

   unwrapBinaryOr(typeFlagsExpression).forEach((m) => {
      const isTypeOrFlagAccess =
         m.type === 'MemberExpression' && m.object.type === 'MemberExpression';
      if (!isTypeOrFlagAccess) return;

      if (m.object.property.name === 'TYPES') {
         type = m.property.name.toLowerCase();
      } else if (m.object.property.name === 'FLAGS') {
         flags.push(m.property.name.toLowerCase());
      }
   });

   return { type, flags };
}

/**
 * For `map<key, value>` fields, WhatsApp encodes the key/value types as a
 * small array expression. Resolves each entry to either a scalar type name
 * or a cross-referenced message/enum name.
 */
function resolveMapType(mapTypeArrayNode, identifiers) {
   if (mapTypeArrayNode?.type !== 'ArrayExpression') return 'map';

   const parts = mapTypeArrayNode.elements.map((element) => {
      if (element?.property?.name) {
         return element.property.name.toLowerCase();
      }
      const ref = findByAlias(identifiers, element.name);
      return ref ? ref.name : 'unknown';
   });

   return `map<${parts.join(', ')}>`;
}

/**
 * Resolves the referenced message/enum name for a `message` or `enum`
 * typed field, given the third element of the field's declaration array
 * (which is either a direct identifier alias or a member-expression
 * cross-reference into another module).
 */
function resolveMessageOrEnumRef({
   refNode,
   fieldName,
   messageName,
   identifiers,
   crossRefs,
   modulesInfo,
   rename,
}) {
   const location = ` from member '${fieldName}' of message '${messageName}'`;

   if (refNode.type === 'Identifier') {
      const found = findByAlias(identifiers, refNode.name);
      if (!found) {
         console.warn(
            `unable to find reference of alias '${refNode.name}'${location}`
         );
         return undefined;
      }
      return found.name;
   }

   if (refNode.type !== 'MemberExpression') return undefined;

   const objectAlias =
      refNode?.object?.name ||
      refNode?.object?.left?.name ||
      refNode?.object?.callee?.name;

   const crossRef = crossRefs.find((r) => r.alias === objectAlias);

   if (refNode?.property?.name?.includes('Spec')) {
      return rename(refNode.property.name);
   }

   if (
      crossRef &&
      crossRef.module !== '$InternalEnum' &&
      modulesInfo[crossRef.module]?.identifiers?.[rename(refNode.property.name)]
   ) {
      return rename(refNode.property.name);
   }

   console.warn(
      `unable to find reference of alias to other module '${refNode.object?.name}' ` +
         `or to message '${refNode.property?.name}' of this module${location}`
   );
   return undefined;
}

/**
 * Fully resolves one protobuf field declaration `[id, typeFlagsExpr, refExpr]`
 * into `{ name, id, type, flags }`.
 */
function resolveMember({
   fieldName,
   elements,
   messageName,
   identifiers,
   crossRefs,
   modulesInfo,
   rename,
}) {
   const { type: rawType, flags } = resolveTypeAndFlags(elements[1], identifiers);
   let type = rawType;

   if (type === 'map') {
      type = resolveMapType(elements[2], identifiers);
   } else if (type === 'message' || type === 'enum') {
      const isEnumViaType =
         elements[1]?.property?.name === 'ENUM' &&
         elements[2]?.property?.name?.includes('Type');

      if (isEnumViaType) {
         type = rename(elements[2].property.name);
      } else {
         type = resolveMessageOrEnumRef({
            refNode: elements[2],
            fieldName,
            messageName,
            identifiers,
            crossRefs,
            modulesInfo,
            rename,
         });
      }
   }

   return { name: fieldName, id: elements[0].value, type, flags };
}

module.exports = { resolveMember, findByAlias };
