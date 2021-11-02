/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let chars = s.match(/[a-zA-Z0-9]/g) ?? []
  if (chars.length === 0) return true
  return chars.join("").toLowerCase() === chars.reverse().join("").toLowerCase()
};
// @lc code=end

