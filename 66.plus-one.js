/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 1
  for (let i = digits.length-1; i >= 0; i--) {
    let val = carry + digits[i]
    if (val === 10) {
      digits[i] = 0
      carry = 1
    } else {
      digits[i] = val
      carry = 0
    }
  }
  if (carry === 1) digits.unshift(1)
  return digits
};
// @lc code=end

