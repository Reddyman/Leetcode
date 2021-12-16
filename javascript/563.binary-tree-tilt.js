/*
 * @lc app=leetcode id=563 lang=javascript
 *
 * [563] Binary Tree Tilt
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
var findTilt = function(root) {
  // DFS approach
  // sum left and right subtree
  // add up every node from left to root
  // base cases
  // 1. no root -> return 0

  let sum = 0
  const getSum = (node) => {
    // base cases
    if (!node) return 0

    const leftSum  = getSum(node.left)
    const rightSum = getSum(node.right)

    sum += Math.abs(leftSum - rightSum)

    return leftSum + rightSum + node.val
  }

  getSum(root)

  return sum
};
// @lc code=end

