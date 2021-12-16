/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // Regex capture group for words
  // then reverse
  // O(n) time
  // O(n) space
  return s.match(/\w+/g).reverse().join(" ")
};
// @lc code=end

