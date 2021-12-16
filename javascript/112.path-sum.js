/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  // DFS until a match is found
  // O(n) time
  // O(n) space

  let dfs = (root, rSum) => {
    // base
    if (!root) return false

    rSum += root.val

    if (!root.left && !root.right) {
      return rSum === targetSum
    }
    // recursive subcalls
    return (
      dfs(root.left, rSum) || dfs(root.right, rSum)
    )
  }

  return dfs(root, 0)
};
// @lc code=end

