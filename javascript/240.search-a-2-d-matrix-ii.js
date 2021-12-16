/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // brute force approach
  // iterate over entire matrix
  // O(n * m)
  // binary row-search search approach
  // binary search over every row
  // O(n * log(m))
  for (let row of matrix) {
    let pLow   = 0
    let pHigh = row.length-1
    while (pLow < pHigh) {
      let midpoint = Math.floor((pLow + pHigh) / 2)
      if (target === row[midpoint]) return true
      if (target < row[midpoint]) {
        pHigh = midpoint
      } else {
        pLow = midpoint + 1
      }
    }
    if (target === row[pLow] || target === row[pHigh]) return true
  }

  return false
};
// @lc code=end

