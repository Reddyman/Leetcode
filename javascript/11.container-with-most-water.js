/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // shift left and right pointers
  // shift based on max height
  let lPointer = 0, rPointer = height.length-1
  let currContainer = 0
  let maxContainer = 0
  while (lPointer < rPointer) {
    currContainer = Math.min(height[lPointer], height[rPointer]) * (rPointer - lPointer)
    maxContainer = Math.max(currContainer, maxContainer)
    if (height[lPointer] < height[rPointer]) {
      lPointer++
    } else {
      rPointer--
    }
  }
  return maxContainer
};
// @lc code=end

