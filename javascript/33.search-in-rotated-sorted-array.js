/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1
  }
  // binary search to find rotation
  // binary search again with rotation adjustment
  let high = nums.length - 1, low = 0
  while (low < high) {
    // find index of smallest value
    let midPoint = Math.floor((low + high) / 2)
    if (nums[midPoint] > nums[high]) {
      low = midPoint + 1
    } else {
      high = midPoint
    }
  }
  let rot = low
  high = nums.length - 1
  low = 0
  while (low <= high) {
    let midPoint = Math.floor((low + high) / 2)
    let rotMidPoint = (midPoint + rot) % nums.length
    if (nums[rotMidPoint] === target) {
      return rotMidPoint
    }
    if (nums[rotMidPoint] < target) {
      low = midPoint + 1
    } else {
      high = midPoint - 1
    }
  }
  return -1
};
// @lc code=end

