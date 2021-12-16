/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // Use the power of a Set
  // O(n) time
  // O(n) space
  return nums.length > new Set(nums).size
};
// @lc code=end

