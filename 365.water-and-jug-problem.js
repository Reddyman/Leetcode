/*
 * @lc app=leetcode id=365 lang=javascript
 *
 * [365] Water and Jug Problem
 */

// @lc code=start
/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function(jug1Capacity, jug2Capacity, targetCapacity) {
  // Mathmatical approach
  // Bezout identity theory
  // check if targetCapacity is a multiple
  // of GCD(jug1Capacity, jug2Capacity)
  const GCD = (a, b) => {
    while (b !== 0) {
      let temp = b
      b = a % b
      a = temp
    }
    return a
  }
  // common sense cases
  if (jug1Capacity === targetCapacity ||
      jug2Capacity === targetCapacity ||
      jug1Capacity + jug2Capacity === targetCapacity) {
        return true
      }
  // water is finally in one or both buckets
  if ((jug1Capacity + jug2Capacity) < targetCapacity) return false

  return targetCapacity % GCD(jug1Capacity, jug2Capacity) === 0


  // Naive recursion approach
  // At every step either
  // fill  1, fill  2
  // empty 1, empty 2
  // pour  1, pour  2
  // prevent cycles. Ex. fill -> empty -> fill!
};
// @lc code=end

