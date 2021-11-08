/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // Create foundNums array of nums.length+1 size
  // fill with found nums, reduce to find 'gap'
  let foundNums = new Array(nums.length + 1).fill(false)
  nums.forEach(v => foundNums[v] = true)

  return foundNums.reduce((acc, v, k) => !v ? k : acc, -1)
};
// @lc code=end

