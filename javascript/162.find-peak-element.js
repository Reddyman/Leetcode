/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  // O(log(n)) time
  // O(k) space
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    let midPoint = Math.floor((high + low) / 2)
    let midPoint2 = midPoint+1
    if (nums[midPoint] < nums[midPoint2]) {
      low = midPoint2
    } else {
      high = midPoint
    }
  }
  return low
};
// @lc code=end

