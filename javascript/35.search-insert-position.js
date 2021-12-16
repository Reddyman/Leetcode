/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let lowerIndex = 0
  let upperIndex = nums.length
  if (nums[lowerIndex] === target) return lowerIndex
  if (nums[upperIndex] === target) return upperIndex
  while (lowerIndex !== upperIndex-1) {
    let middleIndex = parseInt((lowerIndex+upperIndex) / 2)
    if (nums[middleIndex] === target) { return middleIndex }
    if (nums[middleIndex] > target) { upperIndex = middleIndex }
    if (nums[middleIndex] < target) { lowerIndex = middleIndex }
  }
  if (target > nums[upperIndex]) return upperIndex
  if (target < nums[lowerIndex]) return lowerIndex
  return upperIndex
};
// @lc code=end

