/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  // DFS recursive approach
  // keep track of curr index, traverse
  // when next matching word found, store
  // all indexes traversed, rebuild
  // setences at end
  // base cases
  // 1. currIndex is equal to s.length
  // 2. currIndex can't find suitable matching word
  // O(2 ^ wordDict.length * s.length) time
  // O(2 ^ wordDict.length) space

  let matchingIndexes = []
  const dfsHelper = (currIndex, indexes) => {
    // base cases
    if (currIndex === s.length) {
      matchingIndexes.push(indexes)
      return
    }

    for (let word of wordDict) {
      if (s.slice(currIndex).indexOf(word) === 0) {
        dfsHelper(currIndex + word.length, [...indexes, currIndex])
      }
    }
    // no suitable traversals found at currIndex
    return
  }

  dfsHelper(0, [])

  let sentences = []
  for (let indexes of matchingIndexes) {
    let sArrCopy = s.split("")
    let inPlaceAdjustCounterLOL = 0
    for (let index of indexes) {
      if (index === 0) continue
      sArrCopy.splice(
        index + inPlaceAdjustCounterLOL, 0, " ")
      inPlaceAdjustCounterLOL++
    }
    sentences.push(sArrCopy.join(""))
  }

  return sentences
};
// @lc code=end


console.log(wordBreak("catsanddog", ["cat","cats","and","sand","dog"]))