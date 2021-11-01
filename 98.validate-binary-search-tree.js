/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  // O(n) time
  // O(n) space
  // Inorder traversal
  // keep track of order
  // ensure order values are ascending
  let order = []
  let inorderHelper = (node) => {
    if (!node) return
    inorderHelper(node.left)
    order.push(node.val)
    inorderHelper(node.right)
  }
  inorderHelper(root)
  // ensure traversed values are in ascending order
  for (let i = 0; i < order.length - 1; i++) {
    if (order[i] >= order[i+1]) {
      return false
    }
  }
  return true
};
// @lc code=end

