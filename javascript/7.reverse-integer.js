/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x < 0) {
    const reverseNum = parseInt("-" + x.toString().slice(1).split("").reverse().join(""))
    if (reverseNum <=  Math.pow(-2, 31) || reverseNum >= Math.pow(2, 31) - 1) {
      return 0
    }
    return reverseNum
  }
  const reverseNum = parseInt(x.toString().split("").reverse().join(""))
    if (reverseNum <=  Math.pow(-2, 31) || reverseNum >= Math.pow(2, 31) - 1) {
      return 0
    }
  return reverseNum
};
// @lc code=end

