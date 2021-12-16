/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let binStr = ''
  let carry = 0
  let val = 0
  let i = a.length-1
  let j = b.length-1

  while (i >= 0 || j >= 0 || carry === 1) {
    val += i >= 0 ? parseInt(a[i--]) : 0
    val += j >= 0 ? parseInt(b[j--]) : 0
    val += carry

    binStr = (val % 2).toString() + binStr
    carry = Math.floor(val / 2)
    val = 0
  }
  return binStr
};
// @lc code=end

