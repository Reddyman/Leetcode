/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  // Naive recursive approach
  // base cases
  // 1. left/right subArray is empty
  // 2. left/right subArray is 1
  // find index of largest val, single pass
  // divide into left and right subtrees

  // find index of largest val, single pass
  let findMaxIndexHelper = (nums) => {
    let currMax = Number.MIN_SAFE_INTEGER
    let maxIndex = -1
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > currMax) {
        maxIndex = i
        currMax  = nums[i]
      }
    }
    return maxIndex
  }

  const recursiveHelper = (root, nums) => {
    let numsMaxIndex = findMaxIndexHelper(nums)
    root.val         = nums[numsMaxIndex]
    let leftNums     = nums.slice(0, numsMaxIndex)
    let rightNums    = nums.slice(numsMaxIndex + 1)

    // base cases
    if (leftNums.length > 0) {
      if (leftNums.length === 1) {
        root.left = new TreeNode(leftNums[0])
      } else {
        root.left = new TreeNode()
        recursiveHelper(root.left, leftNums)
      }
    }
    if (rightNums.length > 0) {
      if (rightNums.length === 1) {
        root.right = new TreeNode(rightNums[0])
      } else {
        root.right = new TreeNode()
        recursiveHelper(root.right, rightNums)
      }
    }
  }

  let root = new TreeNode()
  recursiveHelper(root, nums)

  return root
};
// @lc code=end

