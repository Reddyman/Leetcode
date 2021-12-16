/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // DP approach:
  // Buttom-up decision(start from end) to
  // rob the current house + house 2 blocks down OR
  // rob the house 1 block down
  // houses at the ends cannot be robbed together
  // compare robbbing first house vs robbing last house
  // Base cases:
  // [] -> 0
  // [1] -> 1
  // [1, 2] -> Math.max(arr[0], arr[1])
  // O(n) time
  // O(n) space

  // base cases
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])

  let robberHelper = (nums) => {
    // base cases
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])

    let dp = new Array(nums.length).fill(0)

    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < dp.length; i++) {
      // either rob the current house + house 2 blocks down
      dp[i] = Math.max(nums[i] + dp[i - 2], dp[i -1])
    }

    return dp[nums.length - 1]
  }

  // rob first house
  let firstHouse = robberHelper(nums.slice(0, nums.length-1))
  // rob last house
  let lastHouse = robberHelper(nums.slice(1))

  return Math.max(firstHouse, lastHouse)
};
// @lc code=end

