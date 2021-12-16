/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
 * @return {number}
 */
var maxPathSum = function(root) {
  // NOTE: Revisit when wiser
  // O(n) time
  // O(log(n)) space
  let maxPathVal = root.val
  const dfs = (root) => {
    if (!root) return 0

    let leftMax = Math.max(dfs(root.left), 0)
    let rightMax = Math.max(dfs(root.right), 0)

    // compute max path sum WITH split
    maxPathVal = Math.max(maxPathVal, root.val + leftMax + rightMax)

    return root.val + Math.max(leftMax, rightMax)
  }

  dfs(root)
  return maxPathVal
};
// @lc code=end

