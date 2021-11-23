/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  // pick element, scan, delete
  // current element, and duplicate element
  // O(n) time O(k) space

  let duplicateNums = []
  while (nums.length > 0) {
    let currNum = nums[0]
    let indexOf = nums.indexOf(currNum, 1)
    if (indexOf > -1) {
      nums.splice(indexOf, 1)
      duplicateNums.push(currNum)
    }
    nums.splice(0, 1)
  }

  return duplicateNums
};
// @lc code=end

