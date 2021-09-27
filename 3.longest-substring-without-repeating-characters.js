/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let subStr = ""
   let maxStrLen = 0
   for (let ch of s) {
     let chIndex = subStr.indexOf(ch)
     if (chIndex !== -1) {
       subStr = subStr.slice(chIndex+1, subStr.length)
     }
     subStr += ch
     if (subStr.length > maxStrLen) {
       maxStrLen = subStr.length
     }
   }
   return maxStrLen
};
// @lc code=end

