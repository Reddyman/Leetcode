/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  // pre-order traversal, then build "linked-list"
  // O(n) time
  // O(n) space
  let order = []

  let preOrderTraversal = (root) => {
    if (!root) return
    order.push(root.val)
    preOrderTraversal(root.left)
    preOrderTraversal(root.right)
  }
  preOrderTraversal(root)
  let currNode = root
  for (let i = 1; i < order.length; i++) {
    currNode.right = new TreeNode(order[i])
    currNode.left = null
    currNode = currNode.right
  }
};
// @lc code=end

