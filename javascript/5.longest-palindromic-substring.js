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
  // middle-out, check every possible palindrome
  // O(n^2)
  let res = ""
  let resLen = 0

  for (let i = 0; i < s.length; i++) {
    // odd length
    let [left, right] = [i, i]
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if ((right - left + 1) > resLen) {
        res = s.slice(left, right + 1)
        resLen = right  - left + 1
      }
      left--
      right++
    }
    // even length
    [left, right] = [i, i + 1]
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if ((right - left + 1) > resLen) {
        res = s.slice(left, right + 1)
        resLen = right - left + 1
      }
      left--
      right++
    }
  }

  return res
};
// @lc code=end

console.log(longestPalindrome("aaaabbaa"))
console.log(longestPalindrome("aaaa"))
