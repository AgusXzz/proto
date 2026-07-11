'use strict';

const walk = require('acorn-walk');

/**
 * For each module, finds local variable aliases that reference another
 * module by name, e.g. `var a = b("WAWebProtobufsE2E")`. These aliases are
 * later used to resolve message/enum fields that point at types defined
 * in a different module.
 */
function extractCrossRefs(module) {
   const crossRefs = [];

   walk.simple(module, {
      AssignmentExpression(node) {
         const isSingleNonObjectArgCall =
            node?.right?.type === 'CallExpression' &&
            node.right.arguments?.length === 1 &&
            node.right.arguments[0].type !== 'ObjectExpression';

         if (isSingleNonObjectArgCall) {
            crossRefs.push({
               alias: node.left.name,
               module: node.right.arguments[0].value,
            });
         }
      },
   });

   return crossRefs;
}

module.exports = { extractCrossRefs };
