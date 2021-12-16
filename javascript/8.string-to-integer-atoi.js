/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  s = s.trim()
  let isNegative = s.charAt(0) === "-"
  let num = parseInt(s)
  if (isNaN(num)) return 0
  if (isNegative && num < Math.pow(-2, 31)) return Math.pow(-2, 31)
  if (num > Math.pow(2,31)-1) return Math.pow(2,31)-1
  return num
};
// @lc code=end

