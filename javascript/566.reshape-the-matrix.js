/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  // build new matrix
  // iterate over total number of elements
  // r * c, then fill new matrix
  // O(n*m) time
  // O(n*m) space

  let m = mat.length
  let n = mat[0].length
  if (m === r && n === c) return mat
  if (r * c !== m * n)    return mat

  let newMat = new Array(r).fill().map(v => new Array(c).fill(0))
  for (let i = 0; i < r * c; i++) {
    newMat[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n]
  }

  return newMat
};
// @lc code=end

