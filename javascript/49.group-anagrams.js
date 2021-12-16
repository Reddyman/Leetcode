/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // hash map approach
  // select string, count chars
  // find matches with same char counts
  // O(numberOfWords * averageNumberOfChars) time
  // O(k) space
  // sorted approach
  // sort all chars in words
  // select sorted word, scan sorted words
  // when match found, mark position
  // add word to resolution array
  // O(numberOfWords * aNOC(log(averageNumberOfChars)) + numberOfWords ^ 2) time
  // O(k) space

  // used to keep track of which words we have selected
  let selectedArr   = new Array(strs.length).fill(false)
  let sortedArr     = strs.map(v => v.split("").sort().join(""))
  let resArr        = []
  for (let i = 0; i < strs.length; i++) {
    // already matched at this index
    if (selectedArr[i]) continue
    selectedArr[i] = true
    let matches = [strs[i]]
    for (let j = i + 1; j < strs.length; j++) {
      if (sortedArr[i] === sortedArr[j]) {
        matches.push(strs[j])
        selectedArr[j] = true
      }
    }
    resArr.push(matches)
  }

  return resArr
};
// @lc code=end

