/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var merge = function(intervals) {
  // Sort, then merge overlapping intervals
  // O(nlog(n)) time
  // O(k) space
  intervals.sort((a, b) => a[0] - b[0])
  const withinInterval = (arrA, arrB) => {
    // check if minimum of arrB is
    // less than or equal to max of arrA
    if (arrB[0] <= arrA[1]) return true
    return false
  }
  let index = 0
  while (index < intervals.length -1) {
    if (withinInterval(intervals[index], intervals[index+1])) {
      // merge
      let min = intervals[index][0]
      let max = Math.max(intervals[index][1], intervals[index+1][1])
      intervals.splice(index, 2, [min, max])
    } else {
      index++
    }
  }
  return intervals
};
// @lc code=end

const intervals = [[1,3],[2,6],[15,18], [8,10]]
console.log(merge(intervals))