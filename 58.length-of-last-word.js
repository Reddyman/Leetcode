/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let startCount = false
  let wordCount = 0
  for (let i = s.length-1; i >= 0; i--) {
    if (s[i] !== " ") startCount = true
    if (startCount && s[i] !== " ") wordCount++
    if (startCount && s[i] === " ") break
  }
  return wordCount
};
// @lc code=end

