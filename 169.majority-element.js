/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // Moore voting algorithm (!)
  // assume every element could be majority
  // element, decrement when next element
  // is not equal to majority element
  // update majority element when count
  // is equal to zero
  // O(n) time O(k) space

  let majorityElement = nums[0]
  let count           = 1

  for (let i = 1; i < nums.length; i++) {
    nums[i] === majorityElement ? count++ : count--
    if (count === 0) {
      majorityElement = nums[i]
      count = 1
    }
  }

  return majorityElement

  // Sort and get midpoint, majority element
  // will always be in the center
  // O(nlog(n)) time O(k) space
  // nums.sort((a, b) => a - b)
  // return nums[Math.floor(nums.length / 2)]

  // Sort and iterate, counting repeat nums
  // O(nlog(n)) time O(k) space
  // if (nums.length === 1) return nums[0]

  // nums.sort((a, b) => a - b)
  // let currNum       = nums[0]
  // let majorityCount = Math.floor(nums.length / 2)
  // let currCounter   = 1
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i] === currNum) {
  //     currCounter += 1
  //     if (currCounter > majorityCount) {
  //       return nums[i]
  //     }
  //   } else {
  //     currNum     = nums[i]
  //     currCounter = 1
  //   }
  // }

  // return -1

  // Hash map approach
  // store count of every num
  // O(n) time O(n) space
  // let numMap = new Map()
  // let majorityCount = Math.floor(nums.length / 2)

  // for (let num of nums) {
  //   if (numMap.has(num)) {
  //     numMap.set(num, numMap.get(num) + 1)
  //   } else {
  //     numMap.set(num, 1)
  //   }
  //   if (numMap.get(num) > majorityCount) {
  //     return num
  //   }
  // }
  // return -1
};
// @lc code=end

