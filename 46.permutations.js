/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  // BFS on permutation tree
  let results = []
  let queue = []

  queue.push([[], nums])

  while (queue.length) {
    // [], [1,2,3] => [1], [2, 3] => [1, 2], [3] => [1,2,3], []
    let [currentSequence, availableNums] = queue.shift()
    if (availableNums.length === 0) {
      results.push(currentSequence)
      continue
    }
    for (let [k, v] of availableNums.entries()) {
      queue.push(
        [
          [...currentSequence, v],
          [...availableNums.slice(0, k),
           ...availableNums.slice(k + 1)]
        ]
      )
    }
  }
  return results
};
// @lc code=end

