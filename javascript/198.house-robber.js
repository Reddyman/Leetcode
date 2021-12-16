/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // DP approach:
  // Bottom-up decision (start from end) to
  // rob the current house + house 2 blocks down OR
  // rob the house 1 block down
  // Base cases:
  // [] -> 0
  // [1] -> 1
  // [1, 2] -> Math.max(nums[0], nums[1])
  // O(n) time
  // O(n) space

  // base cases
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])

  let dp = new Array(nums.length).fill(0)

  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < dp.length; i++) {
    // either rob curr house + house 2 block down or house 1 block down
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
  }

  return dp[nums.length - 1]
};
// @lc code=end


// console.log(rob([1,2,3,1]))
console.log(rob([1,2,1,1]))