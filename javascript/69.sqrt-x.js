/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  for (let i = 0; i <= x; i++) {
    if (Math.pow(i, 2) === x) return i
    if (Math.pow(i, 2) > x) return i-1
  }
  return 0
};
// @lc code=end

