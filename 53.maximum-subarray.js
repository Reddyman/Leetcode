/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currSum = 0
  let maxSum = nums[0]
  nums.forEach((v) => {
    currSum += v
    if (currSum > maxSum) { maxSum = currSum }
    if (currSum < 0) { currSum = 0 }
  })
  return maxSum
};
// @lc code=end

