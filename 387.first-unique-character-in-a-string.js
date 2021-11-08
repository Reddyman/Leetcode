/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  // find char with only 1 occurence
  // iterate over all chars in string,
  // storing in set and map, if already present
  // remove from map, return single map value
  // O(n) time
  // O(n) space
  let charSet = new Set()
  let dupMap = new Map()
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (charSet.has(char)) {
      dupMap.delete(char)
    } else {
      charSet.add(char)
      dupMap.set(char, i)
    }
  }

  return Array.from(dupMap.values())[0] ?? -1
};
// @lc code=end

