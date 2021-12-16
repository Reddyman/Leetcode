/*
 * @lc app=leetcode id=1239 lang=javascript
 *
 * [1239] Maximum Length of a Concatenated String with Unique Characters
 */

// @lc code=start
/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  // exhaustively compare with DFS
  // O(n * m) time
  // O(n * m) space
  if (arr.length === 0) return 0
  let maxCharLen = 0
  let maxSize = arr.reduce((acc, v) => acc += v.length, 0)
  let isAllUniqChars = str => {
    let charSet = new Set(...str.split())
    return charSet.size === str.length
  }
  let dfsHelper = (str, index) => {
    // base cases
    if (!isAllUniqChars(str) || index > arr.length -1) {
      return
    }
    maxCharLen = Math.max(maxCharLen, str.length)

    // recursive cases
    for (let i = index; i < arr.length; i++) {
      dfsHelper(str + arr[i], i)
    }
  }

  dfsHelper("", 0)

  return maxCharLen
};
// @lc code=end

