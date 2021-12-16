/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let traverseOrderP = []
  let traverseOrderQ = []
  let dfs = (node, tOrder) => {
    if (node) {
      tOrder.push(node.val)
      dfs(node.left, tOrder)
      tOrder.push(node.val)
      dfs(node.right, tOrder)
      tOrder.push(node.val)
    } else {
      tOrder.push(0)
    }
  }
  dfs(p, traverseOrderP)
  dfs(q, traverseOrderQ)
  if (JSON.stringify(traverseOrderQ) === JSON.stringify(traverseOrderP)) {
    return true
  } else {
    return false
  }
};
// @lc code=end

