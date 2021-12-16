/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // Special binary search
  // O(log(n)) time
  // O(k) space
  let low = 0
  let high = nums.length - 1
  let res = nums[0]
  while (low <= high) {
    if (nums[low] < nums[high]) {
      res = Math.min(res, nums[low])
      break
    }
    let midPoint = Math.floor((high + low) / 2)
    res = Math.min(res, nums[midPoint])
    if (nums[midPoint] >= nums[low]) {
      low = midPoint + 1
    } else {
      high = midPoint - 1
    }
  }
  return res
};
// @lc code=end

