/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let binStr = n.toString(2).split("").reverse().join("")
  binStr += (new Array(32 - binStr.length).fill("0")).join("")
  return parseInt(binStr, 2)
};
// @lc code=end

