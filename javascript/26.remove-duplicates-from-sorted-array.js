/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return nums
  let prev = nums[0]
  let counter = nums.length
  for (let i = 1; i < nums.length; i++) {
    if (prev === nums[i]) {
      nums.splice(i, 1)
      counter--
      i--
      continue
    } else {
      prev = nums[i]
    }
  }
  return counter
};
// @lc code=end

