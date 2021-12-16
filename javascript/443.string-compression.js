/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  // Start at index, keep track of currChar
  // and currCharCounter, if nextChar !== currChar
  // shift currChar and currCharCounter into beginning of array
  // O(n) time
  // O(k) space

  if (chars.length === 0) return 0
  if (chars.length === 1) return 1

  let currIndex = chars.length - 2
  let currChar  = chars[chars.length - 1]
  let currCounter = 1
  let strCompressLength = 0
  while (currIndex >= strCompressLength) {
    if (currChar !== chars[currIndex]) {
      if (currCounter === 1) {
        chars.unshift(currChar)
        currIndex += 1
        strCompressLength += 1
        currCounter = 0
      } else {
        let currCounterStr = currCounter.toString().split("")
        chars.unshift(currChar, ...currCounterStr)
        currIndex += currCounterStr.length + 1
        strCompressLength += currCounterStr.length + 1
        currCounter = 0
      }
      currChar = chars[currIndex]
    }
    currCounter += 1
    currIndex   -= 1
  }
  // don't forget last chars
  if (currCounter === 1) {
    chars.unshift(currChar)
    strCompressLength += 1
  } else {
    let currCounterStr = currCounter.toString().split("")
    chars.unshift(currChar, ...currCounterStr)
    strCompressLength += currCounterStr.length + 1
  }

  return strCompressLength
};
// @lc code=end

