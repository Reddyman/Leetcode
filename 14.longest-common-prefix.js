/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let subStr = ""
  let maxStr = strs[0]
  for (i in maxStr) {
    for (let s of strs) {
      if (s[i] !== maxStr[i]) {
        return subStr
      }
    }
    subStr += maxStr[i]
  }
  return subStr
};
// @lc code=end

