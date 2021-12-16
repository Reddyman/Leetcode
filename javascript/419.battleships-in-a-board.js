/*
 * @lc app=leetcode id=419 lang=javascript
 *
 * [419] Battleships in a Board
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  // Iterate over every cell
  // DFS over every X, mutate element to '.'
  // to prevent double counts
  // O(m * n) time
  // O(k) space
  let counter = 0
  // Iterate over every cell
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X') {
        // DFS over every X, mutate element to '.'
        // to prevent double counts
        counter++
        let stack = []
        // [row, col]
        stack.push([i, j])
        while (stack.length > 0) {
          let vals = stack.pop()
          let row = vals[0]
          let col = vals[1]
          board[row][col] = '.'
          // UDLR
          let up =    row - 1
          let down =  row + 1
          let left =  col - 1
          let right = col + 1
          // Look up
          if (board[up] !== undefined &&
              board[up][col] === 'X') {
            stack.push([up, col])
          }
          // Look down
          if (board[down] !== undefined &&
              board[down][col] === 'X') {
            stack.push([down, col])
          }
          // Look left
          if (board[row][left] !== undefined &&
              board[row][left] === 'X') {
            stack.push([row, left])
          }
          // Look right
          if (board[row][right] !== undefined &&
              board[row][right] === 'X') {
            stack.push([row, right])
          }
        }
      }
    }
  }

  return counter
};
// @lc code=end


console.log(
  countBattleships(
    [
      ["X","X","X"]
    ]
  )
)