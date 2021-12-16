/*
 * @lc app=leetcode id=1304 lang=javascript
 *
 * [1304] Find N Unique Integers Sum up to Zero
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  // iterate over numbers from 0-(n-1)
  // keep track of running sum
  // push -1 * running sum as last val
  // O(n) time O(n) space

  let runSum = 0
  let rArr   = new Array()
  for (let i = 1; i < n; i++) {
    rArr.push(i)
    runSum += i
  }
  rArr.push(-1 * runSum)

  return rArr
};
// @lc code=end

