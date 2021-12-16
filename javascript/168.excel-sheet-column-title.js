/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  // long division with remainder
  // 1-26 -> A-Z
  let columnTitle = ""
  let convertHelper = num => {
    // base case
    if (num <= 26) {
      columnTitle += String.fromCharCode(num - 1 + 65)
      return
    }
    // recursive subcalls
    convertHelper(Math.floor((num-1) / 26))
    columnTitle += String.fromCharCode((num-1) % 26 + 65)
    return
  }
  convertHelper(columnNumber)

  return columnTitle
};
// @lc code=end


console.log(convertToTitle(1))
console.log(convertToTitle(28))
console.log(convertToTitle(52))
console.log(convertToTitle(701))
console.log(convertToTitle(2147483647))