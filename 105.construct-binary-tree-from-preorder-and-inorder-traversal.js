/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // NOTE: Revisit when wiser
  // O(n) time
  // O(n) space
  if (preorder.length === 0 || inorder.length === 0) {
    return null
  }

  let root = new TreeNode([preorder[0]])
  let mid = inorder.indexOf(preorder[0])

  root.left = buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1))

  return root
};
// @lc code=end

