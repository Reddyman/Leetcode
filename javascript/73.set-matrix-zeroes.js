/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var setZeroes = function(matrix) {
  // O(n+m) time
  // O(n+m) space
  let zeroLocs = []
  const zeroRowCol = (row, col) => {
    for (let i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0
    }
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][col] = 0
    }
  }
  // iterate once to find all 0 locations
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeroLocs.push([i, j])
      }
    }
  }
  // then zeroRowCol per each 0 location
  zeroLocs.map(v => zeroRowCol(v[0], v[1]))
  return matrix
    
};
// @lc code=end

