/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  // Create a number map of value, index
  // Compare every element in nums with map
  // Check for desired conditions
  // O(n) time
  // O(n) space

  let numMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(nums[i])) {
      // check conditions
      if (Math.abs(numMap.get(nums[i]) - i) <= k) {
        return true
      }
      // sliding window, we must out of range of k
      // so update the index value
      numMap.set(nums[i], i)
    } else {
      numMap.set(nums[i], i)
    }
  }

  return false
};
// @lc code=end

