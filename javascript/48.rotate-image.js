/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let [left, right] = [0, matrix.length - 1]
  while (left < right) {
    for (let i = 0; i < (right - left); i++) {
      let [top, bottom] = [left, right]
      // save the topLeft
      let topLeft = matrix[top][left + i]

      // move bottom left into the top left
      matrix[top][left + i] = matrix[bottom - i][left]

      // move bottom right into the bottom left
      matrix[bottom - i][left] = matrix[bottom][right - i]

      // move top right into bottom right
      matrix[bottom][right - i] = matrix[top + i][right]

      // move top left into the top right
      matrix[top + i][right] = topLeft
    }
    left++
    right--
  }
};
// @lc code=end

