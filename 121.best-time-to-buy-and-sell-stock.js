/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minValue = Number.MAX_SAFE_INTEGER
  let maxProfit = 0
  for (let price of prices.values()) {
    if (price < minValue) {
      minValue = price
      continue
    }
    if ((price - minValue) > maxProfit) {
      maxProfit = price - minValue
    }
  }
  return maxProfit
};
// @lc code=end

