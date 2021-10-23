/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numMap = new Map()
  for (let [index, num] of nums.entries()) {
    if (numMap.has(num)) {
      return [numMap.get(num), index]
    }
    numMap.set(target - num, index)
  }
  throw new Error("No two sum found")
};
// @lc code=end

