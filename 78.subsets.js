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
  // start at every index, only add nums larger
  // than the last num in the array
  // base cases
  // 1. No more nums
  // 2. No more nums greater than last num
  // O(n^2) time O(n^2) space

  let numSets = [[]]
  let maxNum  = Math.max(nums)
  let numCombos = new Set()
  const dfsHelper = (currNums, rNums) => {
    if (currNums.length > 0) {
      currNums.sort((a, b) => a - b)
      numCombos.add(currNums.join("_"))
    }
    // base cases
    if (rNums.length === 0) return

    // add nums larger than last num
    for (let i = 0; i < rNums.length; i++) {
      let newCurrNums = [rNums[i], ...currNums]
      let newRNums = [...rNums]
      newRNums.splice(i, 1)
      dfsHelper(newCurrNums, newRNums)
    }
  }

  dfsHelper([], nums)

  for (let combo of numCombos) {
    numSets.push(combo.split("_"))
  }

  return numSets
};
// @lc code=end


console.log(subsets([1,2,3]))