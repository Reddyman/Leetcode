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
  let maxSum = nums[0]
  let currSum = 0
  for (let num of nums) {
    currSum += num
    if (currSum > maxSum) maxSum = currSum
    if (currSum < 0) currSum = 0
  }
  return maxSum
};
// @lc code=end

