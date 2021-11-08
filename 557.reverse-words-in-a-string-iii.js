/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let words = s.split(" ")
  return words.map(v => v.split("").reverse().join("")).join(" ")
    
};
// @lc code=end

