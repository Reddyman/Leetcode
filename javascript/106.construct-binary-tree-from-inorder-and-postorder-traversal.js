/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  // NOTE: Revisit when wiser
  // O(n) time
  // O(n) space
  if (inorder.length === 0 || postorder.length === 0) {
    return null
  }

  let root = new TreeNode(postorder.pop())
  let mid = inorder.indexOf(root.val)

  root.right = buildTree(inorder.slice(mid+1), postorder)
  root.left = buildTree(inorder.slice(0, mid), postorder)

  return root    
};
// @lc code=end

