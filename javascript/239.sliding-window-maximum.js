/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // monotonic decreasing queue approach
  // construct a deque with values in decreasing order
  if (k === 1) return nums

  let maxNums   = []
  let queue     = []

  for (let i = 0; i < nums.length; i++) {
    while (queue.length - 1 >= 0 && nums[i] > queue[queue.length - 1]) {
      queue.pop()
    }
    queue.push(nums[i])

    // when i + 1 - k >= 0, the window is fully overlapping nums
    const j = i + 1 - k
    if (j >= 0) {
      maxNums.push(queue[0])
      // if the biggest element in queue is about to exit window,
      // remove it from queue
      if (nums[j] === queue[0]) queue.shift()
    }
  }

  return maxNums

  // brute force approach
  // iterate and calculate max at every window
  // O(n) time O(n) space
  // let maxNums = []
  // for (let i = 0; i <= nums.length - k; i++) {
  //   maxNums.push(Math.max(...nums.slice(i, i+k)))
  // }
  // return maxNums
};
// @lc code=end

