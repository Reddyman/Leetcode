/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  // Math problem
  // incrementing all but one is equivalent
  // to decrementing that one
  // consider decrementing all values until
  // we end up with an array of min(array) values
  // total sum - (sum of array with only min values)
  // O(n) time O(k) space

  return nums.reduce((acc, v) => acc += v, 0) - nums.length * Math.min(...nums)
};
// @lc code=end

