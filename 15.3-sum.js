/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []
  // sort ascending for simple determinism
  nums.sort((a, b) => a - b)
  let tripletList = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return tripletList
    if (i > 0 && nums[i] === nums[i-1]) continue
    let j = i + 1
    let k = nums.length-1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum > 0) {
        k -= 1
        continue
      }
      if (sum < 0) {
        j += 1
        continue
      }
      tripletList.push([nums[i], nums[j], nums[k]])
      while (nums[j] === nums[j+1]) {
        j += 1
        if (j >= k) break
      }
      while (nums[k] === nums[k-1]) {
        k -= 1
        if (j >= k) break
      }
      j += 1
      k -= 1
    }
  }
  return tripletList
};
// @lc code=end

