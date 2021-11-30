/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let addStr = ""
  let pOne   = num1.length - 1
  let pTwo   = num2.length - 1
  let carry  = 0
  while (pOne > -1 || pTwo > -1) {
    let sum = parseInt(num1[pOne--] || 0) + parseInt(num2[pTwo--] || 0) + carry
    carry   = Math.floor(sum / 10)
    addStr  = (sum % 10).toString() + addStr
  }
  return carry > 0 ? "1" + addStr : addStr
};
// @lc code=end

