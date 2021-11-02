/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
  // O(n) time
  // O(n) space
  // traverse left and right subtrees together
  // compare left of left with right of right AND
  // compare left of right with right of left
  let isSymmetric = (leftNode, rightNode) => {
    if (leftNode === null || rightNode === null) {
      return leftNode === rightNode
    }
    if (leftNode.val !== rightNode.val) {
      return false
    }
    // recursive calls
    return (
      isSymmetric(leftNode.left, rightNode.right) &&
      isSymmetric(leftNode.right, rightNode.left)
    )
  }
  if (!root) return true
  return isSymmetric(root.left, root.right)
};
// @lc code=end

