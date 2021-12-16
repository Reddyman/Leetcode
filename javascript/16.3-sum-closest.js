/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // sort ascending
  nums.sort((a, b) => a - b)
  let closestNum = Number.POSITIVE_INFINITY

  for (let i = 0; i <= nums.length - 3; i++) {
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if ( sum === target) return sum
      if (Math.abs(target - sum) < Math.abs(target - closestNum)) {
        closestNum = sum
      }
      if (sum > target) k -= 1
      if (sum < target) j += 1
    }
  }
  return closestNum
};
// @lc code=end

