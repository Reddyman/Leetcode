/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  // DFS recursive approach
  // keep track of index, keep
  // traversing down subproblems where
  // indexOf next word equal to curr index
  // base cases
  // 2. curr index equal to string length
  // 2. indexOf word not equal to curr index
  // cachable subproblem, since curr index
  // can be encountered by multiple paths
  // O(2 ^ wordDict.length * s.length) time
  // O(2 ^ wordDict.length) space

  let indexCache = new Map()
  const dfsHelper = (index) => {
    // base cases
    if (index === s.length) {
      indexCache.set(index, true)
      return true
    }
    if (indexCache.has(index)) {
      return indexCache.get(index)
    }

    for (let word of wordDict) {
      // base case
      if (s.slice(index).indexOf(word) === 0) {
        // recursive subcalls
        let res = dfsHelper(index + word.length)
        if (res) {
          indexCache.set(index, true)
          return true
        }
      }
    }
    indexCache.set(index, false)
    return false
  }

  dfsHelper(0)

  return indexCache.has(s.length)
};
// @lc code=end


// console.log(wordBreak("leetcode", ["leet", "code"]))
console.log(wordBreak("applepenapple", ["apple", "pen"]))
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "code"]))