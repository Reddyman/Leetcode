/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  // NOTE: Revisit when wiser
  // Sliding window appproach
  // Check replacement length for all 26 chars
  // Use two pointers starting at index
  // Shift right pointer until number of
  // replacements exceeds k, then shift left
  // pointer
  // O(n) time O(26) space
  let charCounter          = new Map()
  let longestRepeatingChar = 0
  // Seed charCounter for easier use
  for (let i = 0; i < 26; i++) {
    charCounter.set(String.fromCharCode(65 + i), 0)
  }
  let leftPointer          = 0
  // NOTE: i is our 'rightPointer'
  for (let i = 0; i < s.length; i++) {
    charCounter.set(s[i], 1 + charCounter.get(s[i]))

    // shift left pointer when exceeded max number of changes possible
    while ((i - leftPointer + 1) - Math.max(...charCounter.values()) > k) {
      charCounter.set(s[leftPointer], charCounter.get(s[leftPointer]) - 1)
      leftPointer += 1
    }
    longestRepeatingChar = Math.max(longestRepeatingChar, i - leftPointer + 1)
  }

  return longestRepeatingChar
};
// @lc code=end

