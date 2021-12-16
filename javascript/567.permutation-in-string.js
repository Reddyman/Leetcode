/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  // Sliding window
  // create a alphabet counter, then check
  // substring of s1.length and 'slide'
  // until end of s2
  // O(n) time
  // O(k) space

  let len1 = s1.length, len2 = s2.length
  if (len1 > len2) return false
  let count = new Array(26).fill(0)
  for (let i = 0; i < len1; i++) {
    count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
    count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--
  }
  // check if all zero
  if (!count.some(v => v !== 0)) return true

  for (let j = len1; j < len2; j++) {
    count[s2.charCodeAt(j) - 'a'.charCodeAt(0)]--
    count[s2.charCodeAt(j - len1) - 'a'.charCodeAt(0)]++
    // check if all zero
    if (!count.some(v => v !== 0)) return true
  }

  return false
};
// @lc code=end

