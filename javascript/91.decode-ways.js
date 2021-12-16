/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  // O(n) time
  // O(n) space
  if (s[0] === "0") return 0
  let dpCache = new Map()
  dpCache.set(s.length, 1)
  const dfsHelper = (i) => {
    if (dpCache.has(i)) return dpCache.get(i)
    if (s[i] === "0") return 0
    let res = dfsHelper(i + 1)
    if (i + 1 < s.length && 
        (s[i] === "1" || (s[i] === "2" && "0123456".split("").indexOf(s[i+1]) > -1))) {
          res += dfsHelper(i + 2)
        }
    dpCache.set(i, res)
    return res
  }
  return dfsHelper(0)
};
// @lc code=end

console.log(numDecodings("226"))