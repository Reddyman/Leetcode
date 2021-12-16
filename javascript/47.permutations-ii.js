/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let results = []
  let queue = []

  queue.push([[], nums])

  while (queue.length) {
    let [currentSequence, availableNums] = queue.shift()

    if (availableNums.length === 0) {
      results.push(currentSequence)
      continue
    }

    let uniqNums = new Set()
    for (let [k, v] of availableNums.entries()) {
      // check for duplicates
      if (uniqNums.has(v)) continue
      uniqNums.add(v)
      queue.push(
        [
          [...currentSequence, v],
          availableNums.filter((v2, k2) => k2 !== k)
        ]
      )
    }
  }
  return results
};
// @lc code=end

