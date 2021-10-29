/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // Build charMap from s and iterate over t
  // O(n+m) time
  // O(n) space
  if (s.length !== t.length) return false
  let charMap = new Map()
  s.split('').forEach(v => charMap.set(v, charMap.get(v) ? charMap.get(v) + 1 : 1))
  for (let i = 0; i < t.length; i++) {
    if (charMap.get(t[i])) {
      if (charMap.get(t[i]) === 1) {
        charMap.delete(t[i])
      } else {
        charMap.set(t[i], charMap.get(t[i]) - 1)
      }
    }
  }
  return charMap.size === 0
};
// @lc code=end

