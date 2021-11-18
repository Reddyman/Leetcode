/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  // DP approach
  // Build up a DP cache of every possible
  // sum, either adding or not adding each num
  // O(2^n) time
  // O(2^n)   space
  let totalSum = nums.reduce((acc, v) => acc += v, 0)
  if (totalSum % 2 !== 0) return false
  let targetSum = totalSum / 2
  let numSet = new Set([0])

  for (let i = nums.length - 1; i > -1; i--) {
    nextNumSet = new Set()
    for (let num of numSet) {
      let sum = num + nums[i]
      if (sum === targetSum) {
        return true
      }
      // add
      nextNumSet.add(sum)
      // don't add
      nextNumSet.add(num)
    }
    numSet = nextNumSet
  }
  return false
};
// @lc code=end

