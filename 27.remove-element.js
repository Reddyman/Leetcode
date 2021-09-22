/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let arrLen = nums.length
  let currIndex = 0
  while (currIndex <= nums.length-1) {
    if (nums[currIndex] === val) {
      nums.splice(currIndex, 1)
      arrLen--
    } else {
      currIndex++
    }
  }
  return arrLen
};
// @lc code=end

