/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  // Check every bit and shift n
  // O(n) time
  // O(k) space
  let counter = 0
  let bit = 0b1
  while (n > 0) {
    if ((n & bit) === bit) counter++
    n = Math.floor(n / 2)
  }
  return counter
  // 'Cheating' string solution:
  // O(n) time
  // O(n) space
  // return n.toString(2)
  //         .split("")
  //         .reduce((acc, v) => v === '1' ? acc += 1 : acc , 0)
};
// @lc code=end


console.log(hammingWeight(0b11111111111111111111111111111101))