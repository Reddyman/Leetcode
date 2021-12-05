/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  // BFS recursive approach
  // base cases
  // 1. col === 0 return 1
  // 2. row === 0 return 1
  // 3. Out of range return 0
  // cache rows + cols for performance
  let rowColCache = new Map()
  const bfsHelper = (row, col) => {
    // base cases
    if (row === 0)   return 1
    if (col === 0)   return 1
    if (col === row) return 1
    if (col < 0)     return 0
    if (col > row)   return 0 // out of bounds

    // check cache
    const cacheKey = `${row}-${col}`
    if (rowColCache.has(cacheKey)) {
      return rowColCache.get(cacheKey)
    }
    const posVal = bfsHelper(row - 1, col - 1) + bfsHelper(row - 1, col)

    // set cache
    rowColCache.set(cacheKey, posVal)

    return posVal
  }

  let rowVals = []
  for (let i = 0; i < rowIndex + 1; i++) {
    rowVals.push(bfsHelper(rowIndex, i))
  }

  return rowVals
};
// @lc code=end

