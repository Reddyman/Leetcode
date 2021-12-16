/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  // keep shifting bits
  // O(2^n) time O(1) space
  let max = parseInt(new Array(n).fill(1).join(""), 2)
  let res = []
  for (let i = 0; i <= max; i++) {
    res.push((i ^ (i >> 1)))
  }
  return res
};
// @lc code=end

