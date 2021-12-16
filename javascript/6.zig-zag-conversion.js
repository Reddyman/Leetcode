/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1 || s.length < numRows) return s

  let rows = []
  let converted = ''
  let reverse = false
  let count = 0

  // prepare rows
  for (let i = 0; i < numRows; i++) {
    rows[i] = []
  }
  // push in zigzag manner
  for (let i = 0; i < s.length; i++) {
    rows[count].push(s[i])
    reverse ? count-- : count++
    if (count === numRows-1 || count === 0) reverse = !reverse
  }
  // join rows into string
  return rows.reduce((prev, curr) => prev + curr.join(""), "")
};
// @lc code=end

