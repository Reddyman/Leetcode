/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // Bucket sort
  // O(n) time
  // O(n) space
  let buckets = {}
  for (let num of nums) {
    buckets[num] ? buckets[num] += 1 : buckets[num] = 1
  }
  let index = 0
  for (let [k, v] of Object.entries(buckets)) {
    for (let i = 0; i < v; i++) {
      nums[index] = parseInt(k)
      index++
    }
  }
  return nums
};
// @lc code=end

console.log(sortColors([2,0,2,1,1,0]))