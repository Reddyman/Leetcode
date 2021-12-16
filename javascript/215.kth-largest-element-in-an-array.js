/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // Store in max heap, pop until kth element
  // O(n + klog(n))
  // O(n) space
  // JavaScript does not have an in-built min/max heap
  // or priority queue implementation :(
  // let heap = new MaxHeap()
  // nums.forEach(v => heap.push(v))
  // for (let i = 1; i < k; i++) {
  //   heap.pop()
  // }
  // return heap.pop()
  
  // Naive approach: sort nums, return kth element
  // O(nlog(n)) time
  // O(k) space
  return nums.sort((a, b) => a - b)[nums.length - k]
};
// @lc code=end

