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
  const numMap = {}
  for (let i = 0; i < nums.length; i++) {
    if (target-nums[i] in numMap) {
      return [numMap[target-nums[i]],i]
    }
    numMap[nums[i]] = i
  }
};
// @lc code=end

