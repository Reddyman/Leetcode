/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // DFS recursive approach
  // sort all nums
  // start at every index, only add nums larger
  // base cases
  // 1. No more nums
  // O(n^2) time O(n^2) space

  let numSets = [[]]
  nums.sort((a, b) => a - b)
  const dfsHelper = (currNums, rNums) => {
    // base cases
    if (rNums.length === 0) return

    // add nums larger than last num
    // nums are already sorted already
    for (let i = 0; i < rNums.length; i++) {
      let newCurrNums = [...currNums, rNums[i]]
      numSets.push(newCurrNums)
      let newRNums = rNums.slice(i+1)
      // console.log(newRNums)
      dfsHelper(newCurrNums, newRNums)
    }
  }

  dfsHelper([], nums)

  return numSets
};
// @lc code=end

