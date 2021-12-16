/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // Solution for +180IQ:
  // XOR is cumulative AND (a XOR a === 0)
  // O(n) time
  // O(k) space
  return nums.reduce((acc, v) => acc ^= v, 0)
  // Solution for chumps:
  // O(n) time
  // O(n) space
  // let numSet = new Set()
  // for (let num of nums.values()) {
  //   if (numSet.has(num)) {
  //     numSet.delete(num)
  //   } else {
  //     numSet.add(num)
  //   }
  // }
  // return Array.from(numSet)[0]
};
// @lc code=end

