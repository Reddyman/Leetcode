/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  // DFS, pre-order traversal
  // compare every value, until a subtree root is found
  // then ensure every node in subtree is equal
  // O(n + m) time
  // O(n + m) space
  if (!root) return !subRoot
  return (
    isEqual(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  )
};

var isEqual = function(rootA, rootB) {
  if (!rootA || !rootB) return !rootA && !rootB
  if (rootA.val !== rootB.val) return false
  return (
    isEqual(rootA.left, rootB.left) &&
    isEqual(rootA.right, rootB.right)
  )
}
// @lc code=end

