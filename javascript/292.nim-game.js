/*
 * @lc app=leetcode id=292 lang=javascript
 *
 * [292] Nim Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  // Pattern
  // If n <= 3      you always win
  // If n % 4 === 0 you always lose
  // If n % 5 === 0 you always win
  // ...
  // therefore:
  // If 0 < n % 4 <= 3 you always win
  // return n % 4 > 0
  // O(k) time O(k) space

  return n % 4 > 0
};
// @lc code=end

