/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  // Think of it as a number line
  // Sort first based on end index
  // Shoot arrow at every end index
  // Remove all balloons in range
  // O(nlog(n)) time
  // O(n) space
  // Sort first based on end index

  if (points.length === 0) return 0
  if (points.length === 1) return 1

  // Sort first based on end index
  points.sort((a, b) => a[1] - b[1])
  // Shoot arrow at every index
  let arrowCounter = 1
  let currShotIndex = points[0][1]
  for (let i = 0; i < points.length; i++) {
    // Remove all balloons in range
    if (points[i][0] <= currShotIndex) {
      continue
    } else {
      // new arrow needed
      currShotIndex = points[i][1]
      arrowCounter += 1
    }
  }

  return arrowCounter
};
// @lc code=end

