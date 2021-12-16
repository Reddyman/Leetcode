/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // Create new array and place rotated nums
  // Copy elements back into original array
  // O(n) time
  // O(n) space
  let numsCopy = Array(nums.length).fill(0)
  for (let i = 0; i < nums.length; i++) {
    let rot = (i + k) % nums.length
    numsCopy[rot] = nums[i]
  }
  numsCopy.forEach((v, k) => nums[k] = v)
};
// @lc code=end

