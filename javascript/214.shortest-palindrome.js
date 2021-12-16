/*
 * @lc app=leetcode id=214 lang=javascript
 *
 * [214] Shortest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  // NOTE: Revisit when wiser
  // KMP Patrial match table
  const kmpPartialMatch = (str) => {
    let arr = new Array(str.length).fill(0)
    for (let i = 1; i < str.length; i++) {
      let k = arr[i-1]
      while (k > 0 && str[k] !== str[i]) k = arr[k -1]
      arr[i] += (k += str[k] === str[i] ? 1 : 0)
    }
    return arr[str.length-1]
  }
  let strWithReverse = s + "#" +  s.split("").reverse().join("")
  let index          = kmpPartialMatch(strWithReverse)

  return strWithReverse.substr(s.length + 1, s.length - index) + s
};
// @lc code=end

