/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // Iterate over all elements in grid
  // BFS -> iterative move UDLR
  // base case:
  // 1. Next element UDLR is 0
  // 2. Or element is undefined (edge)
  // Prevent double counting
  // Use 2D array of true/false to keep track of visited
  // O((m * n)) time
  // O((m * n)) space
  let m = grid.length
  let n = grid[0].length
  let counter = 0
  let hasVisitedCache = Array(m).fill().map(() => new Array(n).fill(false))
  // iterate over all elements in grid
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // BFS -> iterative move UDLR
      if (grid[i][j] === '0' ||
          hasVisitedCache[i][j]) {
        hasVisitedCache[i][j] = true
        continue
      }
      counter++
      let queue = []
      // [row, col]
      queue.unshift([i, j])
      while (queue.length > 0) {
        let cordinates = queue.shift()
        let row = cordinates[0]
        let col = cordinates[1]
        if (hasVisitedCache[row][col]) continue
        hasVisitedCache[row][col] = true
        let up = row + 1
        let down = row - 1
        let left = col - 1
        let right = col + 1
        // check up 
        if (grid[up] && grid[row][col] !== undefined &&
            grid[up][col] === '1') {
              queue.unshift([up, col])
            }
        // check down
        if (grid[down] && grid[down][col] !== undefined &&
            grid[down][col] === '1') {
              queue.unshift([down, col])
            }
        // check left
        if (grid[row][left] !== undefined &&
            grid[row][left] === '1') {
              queue.unshift([row, left])
            }
        // check right
        if (grid[row][right] !== undefined &&
            grid[row][right] === '1') {
              queue.unshift([row, right])
            }
      }
    }
  }
  return counter
};
// @lc code=end

