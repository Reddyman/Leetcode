/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  // Hashmap appraoch
  // abba -> 0110
  // dog cat cat dog -> 0 1 1 0
  // O(n) time
  // O(n) space
  let charToWordMap = new Map()
  let encounteredWords = new Set()
  let words = s.split(" ")

  if (words.length !== pattern.length) {
    return false
  }

  for (let i = 0; i < pattern.length; i++) {
    if (charToWordMap.has(pattern[i])) {
      // char encountered before, but
      // with different word
      if (charToWordMap.get(pattern[i]) !== words[i]) {
        return false
      }
    } else {
      // word encountered before, but
      // with different char
      if (encounteredWords.has(words[i])) {
        return false
      }
      charToWordMap.set(pattern[i], words[i])
      encounteredWords.add(words[i])
    }
  }

  return true
};
// @lc code=end


console.log(wordPattern("jquery", "jquery"))