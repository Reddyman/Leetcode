/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const stairMap = new Map()
  const climbStair = (i) => {
    if (i < 0) return 0
    if (i === 0) return 1
    if (stairMap.has(i)) return stairMap.get(i)
    let steps = climbStair(i-1) + climbStair(i-2)
    stairMap.set(i, steps)
    return steps
  }
  return climbStair(n)
};
// @lc code=end

