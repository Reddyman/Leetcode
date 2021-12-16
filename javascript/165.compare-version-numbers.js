/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  // tediously compare...
  // O(n+m) time
  // O(n+m) space
  let v1Nums = version1.split(".").map(v => parseInt(v))
  let v2Nums = version2.split(".").map(v => parseInt(v))

  let range = Math.max(v1Nums.length, v2Nums.length)
  for (let i = 0; i < range; i++) {
    let v1Num = v1Nums[i] ?? 0
    let v2Num = v2Nums[i] ?? 0

    if (v1Num > v2Num) return 1
    if (v1Num < v2Num) return -1
  }

  return 0
};
// @lc code=end

