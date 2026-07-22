'use strict';

/**
 * Recursively collects every expression reachable from a node:
 * the node's own `.expression`, expressions inside call-argument
 * function bodies, expressions inside a block body, and expressions
 * inside a sequence expression. Used to find the `internalSpec`
 * assignment buried inside a module wrapper's IIFE.
 *
 * Optimized with visited set to avoid infinite recursion and duplicate processing.
 */
function extractAllExpressions(node, visited = new WeakSet()) {
   if (!node || visited.has(node)) return [];
   visited.add(node);

   const expressions = [node];
   const exp = node.expression;

   if (exp) {
      expressions.push(exp);
   }

   if (node?.expression?.arguments?.length) {
      for (const arg of node.expression.arguments) {
         if (arg?.body?.body?.length) {
            for (const bodyExp of arg.body.body) {
               expressions.push(...extractAllExpressions(bodyExp, visited));
            }
         }
      }
   }

   if (node?.body?.body?.length) {
      for (const bodyExp of node.body.body) {
         if (bodyExp.expression) {
            expressions.push(...extractAllExpressions(bodyExp.expression, visited));
         }
      }
   }

   if (node.expression?.expressions?.length) {
      for (const seqExp of node.expression.expressions) {
         expressions.push(...extractAllExpressions(seqExp, visited));
      }
   }

   return expressions;
}

const unspecName = (name) => {
   if (typeof name !== 'string') {
      throw new TypeError(
         `unspecName expected a string identifier name, got: ${JSON.stringify(name)}`
      );
   }
   return name.endsWith('Spec') ? name.slice(0, -4) : name;
};
const unnestName = (name) => name.split('$').slice(-1)[0];
const getNesting = (name) => name.split('$').slice(0, -1).join('$');
const makeRenameFunc = (moduleName) => {
   // Cache the rename function to avoid repeated calls
   const cache = new Map();
   return (name) => {
      if (!cache.has(name)) {
         cache.set(name, unspecName(name));
      }
      return cache.get(name);
   };
};

module.exports = {
   extractAllExpressions,
   unspecName,
   unnestName,
   getNesting,
   makeRenameFunc,
};
