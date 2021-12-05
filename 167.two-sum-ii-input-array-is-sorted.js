/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // pointer left and pointer right
  // shift pointer left or right if above/below target
  // O(n) time O(k) space
  let pLow  = 0
  let pHigh = numbers.length -1
  while (pLow < pHigh) {
    let sum = numbers[pLow] + numbers[pHigh]
    if (sum === target) break
    if (sum > target) pHigh--
    if (sum < target) pLow++
  }

  return [pLow + 1, pHigh + 1]
};
// @lc code=end

