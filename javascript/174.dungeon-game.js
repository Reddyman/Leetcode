/*
 * @lc app=leetcode id=174 lang=javascript
 *
 * [174] Dungeon Game
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  // Bottom-up DP approach
  // Calculate minimum HP at every iteration
  // O(m * n) time
  // O(m * n) space
  let m = dungeon.length, n = dungeon[0].length
  let dp = new Array(m + 1).fill(new Array(n + 1).fill(Number.MAX_SAFE_INTEGER))

  for (let i = m -1; i >= 0; i--) {
    for (let j = n -1; j >= 0; j--) {
      if (i === m-1 && j === n -1) {
        // bottom right cell (princess)
        dp[i][j] = Math.min(0, dungeon[i][j])
      } else if (i === m-1) {
        // last row
        dp[i][j] = Math.min(0, dungeon[i][j] + dp[i][j+1])
      } else if (j === n-1) {
        // last col
        dp[i][j] = Math.min(0, dungeon[i][j] + dp[i+1][j])
      } else {
        dp[i][j] = Math.min(0, dungeon[i][j] + Math.max(dp[i][j+1], dp[i+1][j]))
      }
    }
  }

  return Math.abs(dp[0][0]) + 1
};
// @lc code=end

