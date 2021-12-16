/*
 * @lc app=leetcode id=491 lang=javascript
 *
 * [491] Increasing Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  // DFS recursive approach
  // base cases
  // 1. end of nums array
  // recursive subcalls
  // add current element if larger, or skip
  // O(2^n) time O(2^n) space
  let incrSubsequences = new Map()
  let dfsHelper = (currIndex, currSequence) => {
    // base cases
    if (currIndex > nums.length) {
      return
    }
    if (currSequence.length > 1) {
      let currSequenceCopy = [...currSequence]
      incrSubsequences.set(JSON.stringify(currSequenceCopy), currSequenceCopy)
    }
    // recursive subcalls
    let lastVal = currIndex !== 0 ? currSequence[currSequence.length-1] : Number.MIN_SAFE_INTEGER
    for (let i = currIndex; i < nums.length; i++) {
      // check remaining subarray for next larger value
      if (nums[i] >= lastVal) {
        // use
        dfsHelper(i + 1, currSequence.concat(nums[i]))
      }
    }
    return
  }

  dfsHelper(0, [])

  return new Array(...incrSubsequences.values())
};
// @lc code=end


console.log(findSubsequences([4,6,7,7]))