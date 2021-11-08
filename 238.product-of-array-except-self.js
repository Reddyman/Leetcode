/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // get all products before index
  // get all products after index
  // O(n) time
  // O(n) space
  let productsExceptAtIndex = []
  let rProductBefore = 1
  // get all products before index
  for (let i = 0; i < nums.length; i++) {
    productsExceptAtIndex[i] = rProductBefore
    rProductBefore *= nums[i]
  }
  // get all products after index
  let rProductAfter = 1
  for (let i = nums.length-1; i >= 0; i--) {
    productsExceptAtIndex[i] *= rProductAfter
    rProductAfter *= nums[i]
  }

  return productsExceptAtIndex
};
// @lc code=end

