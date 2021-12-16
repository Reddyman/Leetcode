/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // DP with caching
  // O(n^2) time
  // O(n) space

  if (nums.length === 0) return 0
  if (nums.length === 1) return 1

  let cache = new Array(nums.length).fill(1)
  for (let i = nums.length-1; i >= 0; i--) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        cache[i] = Math.max(cache[i], 1 + cache[j])
      }
    }
  }

  return Math.max(...cache)
};
// @lc code=end

