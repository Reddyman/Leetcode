/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  // Regex approach
  // match words that has all chars in capture group
  // Hash map approach
  // check every char of every word with hash map
  // if every char exists in row hash map
  // then add word to list
  // O(3 * words * averageCharsPerWord) time
  // O(26 + words) space
  let charSetOne   = new Set('qwertyuiop')
  let charSetTwo   = new Set('asdfghjkl')
  let charSetThree = new Set('zxcvbnm')

  let rowCharSets = [charSetOne, charSetTwo, charSetThree]

  let wordsFound = []
  for (let rowCharSet of rowCharSets) {
    for (let word of words) {
      let foundWord = true
      for (let char of word) {
        if (!rowCharSet.has(char.toLowerCase())) {
          foundWord = false
          break
        }
      }
      if (foundWord) wordsFound.push(word)
    }
  }

  return wordsFound
};
// @lc code=end

