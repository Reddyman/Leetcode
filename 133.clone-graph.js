/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  // DFS traversal with a hash map
  // to keep track of val->neighbors
  // NOTE: vals are unique
  // O(n) time O(n) space

  let nodeMap = new Map()

  const dfsHelper = (node) => {
    if (!node) return node
    if (!nodeMap.has(node.val)) {
      nodeMap.set(node.val, new Node(node.val))
      let currNode = nodeMap.get(node.val)
      currNode.neighbors = node.neighbors.map(neighbor => dfsHelper(neighbor))
    }
    return nodeMap.get(node.val)
  }

  return dfsHelper(node)
};
// @lc code=end

