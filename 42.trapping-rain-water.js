/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // take min of left and right
  // subtract from current height
  // O(n) time O(k) space
  let rainWater = 0
  let maxLeft  = new Array(height.length)
  let maxRight = new Array(height.length)

  let currMaxLeft = 0
  for (let i = 0; i < height.length; i++) {
    maxLeft[i] = currMaxLeft
    currMaxLeft = Math.max(height[i], currMaxLeft)
  }
  let currMaxRight = 0
  for (let i = height.length - 1; i > -1; i--) {
    maxRight[i] = currMaxRight
    currMaxRight = Math.max(height[i], currMaxRight)
  }

  // console.log(maxLeft)
  // console.log(maxRight)

  for (let i = 0; i < height.length; i++) {
    let calc = Math.min(maxLeft[i], maxRight[i]) - height[i]
    if (calc > 0) rainWater += calc
  }

  return rainWater
};
// @lc code=end

