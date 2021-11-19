/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  // Brute force approach
  // iterate over every item
  // count live cells around it
  // determine state in next cycle
  // O(m * n) time
  // O(m * n) space
  const lifeCounter = (row, col) => {
    let up    = row - 1
    let down  = row + 1
    let left  = col - 1
    let right = col + 1
    let lifeC = 0
    // check up
    if (board[up] && board[up][col] === 1) lifeC++
    // check up-right
    if (board[up] && board[up][right] === 1) lifeC++
    // check right
    if (board[row][right] === 1) lifeC++
    // check bottom-right
    if (board[down] && board[down][right] === 1) lifeC++
    // check bottom
    if (board[down] && board[down][col] === 1) lifeC++
    // check bottom-left
    if (board[down] && board[down][left] === 1) lifeC++
    // check left
    if (board[row][left] === 1) lifeC++
    // check up-left
    if (board[up] && board[up][left] === 1) lifeC++

    return lifeC
  }

  let rows = board.length
  let cols = board[0].length
  let nextBoard = new Array(rows).fill()
        .map(v => new Array(cols).fill(0))
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let lifeC = lifeCounter(i, j)
      switch (lifeC) {
        case 0:
        case 1:
          nextBoard[i][j] = 0
        break
        case 2:
        case 3:
          if (board[i][j] === 1) {
            nextBoard[i][j] = 1
          } else {
            if (lifeC === 3) {
              nextBoard[i][j] = 1
            }
          }
        break
        default:
          nextBoard[i][j] = 0
        break
      }
    }
  }
  // modify current board in-place...
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      board[i][j] = nextBoard[i][j]
    }
  }
};
// @lc code=end

