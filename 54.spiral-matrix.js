/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let [top, left] = [0, 0]
  let [bottom, right] = [matrix.length,
                         matrix[0].length]
  let results = []

  while (top < bottom && left < right) {
    // top left to top right
    for (let col = left; col < right; col++) {
      results.push(matrix[top][col])
    }
    top++
    // right top to down right
    for (let row = top; row < bottom; row++) {
      results.push(matrix[row][right - 1])
    }
    right--
    // check for edge cases
    if (!(left < right && top < bottom)) break
    // right bottom to left bottom
    for (let col = right - 1; col > left - 1; col--) {
      results.push(matrix[bottom - 1][col])
    }
    bottom--
    // left bottom to left top
    for (let row = bottom - 1; row > top - 1; row--) {
      results.push(matrix[row][left])
    }
    left++
  }
  return results
};
// @lc code=end

