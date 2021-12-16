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
  let tripletSum = []
  if (nums.length < 3) return tripletSum
  // sort and shift 3 pointers
  // O(nlog(n) + n^2)
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    // can't ever reach a sum of 0
    if (nums[i] > 0) return tripletSum
    // avoid checking repeated digits
    if (i > 0 && nums[i] === nums[i-1]) continue
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        tripletSum.push([nums[i], nums[j], nums[k]])
        k--
        j++
      } else if (sum > 0) {
        k--
        continue
      } else {
        j++
        continue
      }
      // avoid checking repeated digits
      while (nums[k] === nums[k+1]) {
        k--
      }
      while (nums[j] === nums[j-1]) {
        j++
      }
    }
  }
  return tripletSum
};
// @lc code=end


console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))
console.log(threeSum([-2,0,1,1,2]))