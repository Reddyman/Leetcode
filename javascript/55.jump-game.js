/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // recursively iterate over all jumps from index
  // O(n^2) time
  // O(n^2) space
  let deadIndices = new Set()
  let canJumpHelper = (currIndex) => {
    if (deadIndices.has(currIndex)) return false
    if (currIndex + nums[currIndex] >= nums.length -1) return true
    if (currIndex === nums.length -1) return true
    if (currIndex > nums.length -1) return false

    for (let i = nums[currIndex]; i > 0; i--) {
      if (canJumpHelper(currIndex + i)) return true
    }
    deadIndices.add(currIndex)
    return false
  }
  return canJumpHelper(0)
};
// @lc code=end

