/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let rSum = 0
  let counter = 0
  let colLength = columnTitle.length - 1
  while (counter <= colLength) {
    rSum += (columnTitle.charCodeAt(colLength - counter) - 65 + 1) * 26 ** counter
    counter++
  }

  return rSum
};
// @lc code=end

