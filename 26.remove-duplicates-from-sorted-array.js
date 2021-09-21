/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let currVal = nums[0]
  let listIndex = 1
  for (let i = 1; i < nums.length; i++) {
    if (currVal === nums[i]) {
      continue
    }
    nums[listIndex] = nums[i]
    currVal = nums[i]
    listIndex++
  }
  return listIndex
};
// @lc code=end

