/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // Solution for +180IQ
  if (num === 0) return 0
  if (num % 9 === 0) return 9
  return num % 9
    
  // Solution for chumps
  // let res = num.toString().split("").reduce((acc, v) => acc += parseInt(v) , 0)
  // while (res.toString().length > 1) {
  //   res = res.toString()
  //            .split("")
  //            .reduce((acc, v) => acc += parseInt(v) , 0)
  // }
  // return res
};
// @lc code=end

