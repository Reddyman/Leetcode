/*
 * @lc app=leetcode id=1647 lang=javascript
 *
 * [1647] Minimum Deletions to Make Character Frequencies Unique
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
  // store freq count of all chars
  // in an array of size 26
  // sort freq count array ascending
  // iterate and count decrements to make unique
  // O(nlog(n)) time O(k) space

  // store freq count of all chars
  let alphaFreq = new Array(26).fill(0)
  for (let char of s) {
    alphaFreq[char.charCodeAt(0) - 97]++
  }

  // remove chars no count
  alphaFreq = alphaFreq.filter(v => v > 0)

  // sort descending
  alphaFreq.sort((a, b) => b - a)

  // count number of deletions needed
  let deleteCounter = 0
  let currCount     = alphaFreq[0]
  for (let i = 1; i < alphaFreq.length; i++) {
    while (currCount <= alphaFreq[i]
           && alphaFreq[i] !== 0) {
      alphaFreq[i]--
      deleteCounter++
    }
    currCount = alphaFreq[i]
  }
  return deleteCounter
};
// @lc code=end


// console.log(minDeletions("aab"))
// console.log(minDeletions("ceabaacb"))
// console.log(minDeletions("abcabc"))
// console.log(minDeletions("bbcebab"))