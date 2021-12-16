/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // Hash map approach
  // create a numFreqMap
  // iterate over freq count,
  // return k most frequent
  // O(n) time O(n) space
  let numFreqMap = new Map()
  for (let num of nums) {
    if (numFreqMap.has(num)) {
      numFreqMap.set(num, numFreqMap.get(num) + 1)
    } else {
      numFreqMap.set(num, 1)
    }
  }

  let kMostFreq = []
  while (k > 0) {
    let maxCount = 0
    let maxNum   = 0
    for (let [k, v] of numFreqMap) {
      if (v > maxCount) {
        maxCount = v
        maxNum   = k
      }
    }
    numFreqMap.delete(maxNum)
    kMostFreq.push(maxNum)
    k--
  }

  return kMostFreq
};
// @lc code=end

