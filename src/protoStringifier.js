'use strict';

const { unnestName } = require('./astUtils');

const INDENT = ' '.repeat(4);
const addPrefix = (lines, prefix) => lines.map((line) => prefix + line);

function stringifyEnum(identifier, overrideName = null) {
   return [
      `enum ${overrideName || identifier.displayName || identifier.name} {`,
      ...addPrefix(
         identifier.enumValues.map((v) => `${v.name} = ${v.id};`),
         INDENT
      ),
      '}',
   ];
}

function stringifyMessageSpecMember(member, completeFlags, moduleIndentationMap, parentName) {
   if (member.type === '__oneof__') {
      return [
         `oneof ${member.name} {`,
         ...addPrefix(
            member.members.flatMap((m) =>
               stringifyMessageSpecMember(m, false, moduleIndentationMap, parentName)
            ),
            INDENT
         ),
         '}',
      ];
   }

   if (member.flags.includes('packed')) {
      member.flags.splice(member.flags.indexOf('packed'), 1);
      member.packed = ' [packed=true]';
   }

   if (completeFlags && member.flags.length === 0 && !member.type?.includes('map')) {
      member.flags.push('optional');
   }

   const indentation = moduleIndentationMap[member.type]?.indentation;
   let typeName = unnestName(member.type || 'unknown');
   if (indentation !== parentName && indentation) {
      typeName = `${indentation.replaceAll('$', '.')}.${typeName}`;
   }

   const flagsPrefix = member.flags.length ? `${member.flags.join(' ')} ` : '';
   return [`${flagsPrefix}${typeName} ${member.name} = ${member.id}${member.packed || ''};`];
}

function stringifyMessageSpec(identifier, { moduleIndentationMap, modInfo, getEntity }) {
   const nestedMembers = moduleIndentationMap[identifier.name]?.members;
   const currentName = identifier.displayName || identifier.name;
   const lines = [
      `message ${currentName} {`,
      ...addPrefix(
         identifier.members.flatMap((m) =>
            stringifyMessageSpecMember(m, true, moduleIndentationMap, identifier.name)
         ),
         INDENT
      ),
   ];

   if (nestedMembers?.size) {
      const sortedMemberNames = Array.from(nestedMembers).sort();
      for (const memberName of sortedMemberNames) {
         const entity = modInfo.identifiers[memberName];
         if (!entity) {
            console.warn(`[protoStringifier] missing nested entity: ${memberName}`);
            continue;
         }
         // Pre-calculate display name if not already set
         if (!entity.displayName) {
            entity.displayName = entity.name.slice(identifier.name.length + 1);
         }
         lines.push(...addPrefix(getEntity(entity), INDENT));
      }
   }

   lines.push('}');
   return lines;
}

/**
 * Renders any resolved identifier (message or enum) to proto2 text lines.
 * `context` bundles the shared state (indentation map, module info, and a
 * self-reference for recursing into nested entities) that the original
 * script closed over via module-scoped variables.
 */
function getEntity(identifier, context) {
   if (identifier.members) {
      return stringifyMessageSpec(identifier, { ...context, getEntity: (v) => getEntity(v, context) });
   }
   if (identifier.enumValues?.length) {
      return stringifyEnum(identifier);
   }
   return [`// Unknown entity ${identifier.name}`];
}

function stringifyEntity(identifier, context) {
   return {
      name: identifier.name,
      content: getEntity(identifier, context).join('\n'),
   };
}

module.exports = { stringifyEntity, getEntity };
