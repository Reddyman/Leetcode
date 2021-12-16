/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  // Brute-force backtracking
  // O(n*m* 4^n)
  // DFS implementation
  let ROWS = board.length, COLS = board[0].length
  let path = []
  let wordIndex = 0
  let dfs = (r, c, wordIndex) => {
    if (wordIndex === word.length) return true
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS ||
        path.some(v => v[0] === r && v[1] === c) ||
        word[wordIndex] !== board[r][c]
       ) {
          return false
        }
    path.push([r, c])
    let res = (
      dfs(r + 1, c, wordIndex + 1) ||
      dfs(r - 1, c, wordIndex + 1) ||
      dfs(r, c + 1, wordIndex + 1) ||
      dfs(r, c - 1, wordIndex + 1)
    )
    path.pop()
    return res
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (dfs(i, j, wordIndex)) return true
    }
  }
  return false
};
// @lc code=end

let board = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
]

console.log(
  exist(
    board,
    "ABCCED"
  )
)