/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let leftIndex = 0, rightIndex = 0
  // Check every possible palindrome outward from i
  for (let i = 0; i < s.length; i++) {
    for (let j of [i, i+1]) {
      for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++) {
        if ((r - l + 1) > (rightIndex - leftIndex + 1)) {
          [leftIndex, rightIndex] = [l, r]
        }
      }
    }
  }
  return s.slice(leftIndex, rightIndex+1)
};
// @lc code=end

