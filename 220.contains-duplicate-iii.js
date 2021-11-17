/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  // Sliding window approach
  // Checking for conditions
  // O(n) time
  // O(k) space

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; (j - i) <= k; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        // remember, we are implicitly checking
        // for the condition abs(i - j) <= k
        return true
      }
    }
  }

  return false
};
// @lc code=end

