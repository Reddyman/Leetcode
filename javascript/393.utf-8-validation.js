/*
 * @lc app=leetcode id=393 lang=javascript
 *
 * [393] UTF-8 Validation
 */

// @lc code=start
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  // check every character following the rules
  // O(n) time
  // O(k) space
  let checkNextChars = (numOfChars) => {
    if (numOfChars > data.length) {
      return false
    }
    for (let i = 0; i < numOfChars; i++) {
      let nextChar = data.shift()
      let checkChar = 0b10000000
      if ((nextChar & checkChar) !== checkChar) {
        return false
      }
    }
    return true
  }

  while (data.length > 0) {
    let nextChar = data.shift()
    let invalidChars  = 0b11111000
    let fourChars     = 0b11110000
    let threeChars    = 0b11100000
    let twoChars      = 0b11000000

    // no breaking 0 char
    if ((nextChar & invalidChars) === invalidChars) {
      return false
    }
    // char types
    if ((nextChar & fourChars) === fourChars) {
      // four chars
      if (!checkNextChars(3)) {
        return false
      }
    } else if ((nextChar & threeChars) === threeChars) {
      // three chars
      if (!checkNextChars(2)) {
        return false
      }
    } else if ((nextChar & twoChars) === twoChars) {
      // two chars
      if (!checkNextChars(1)) {
        return false
      }
    } else if (nextChar <= 0b01111111) {
      // one char
      continue
    } else {
      return false
    }
  }

  return true
};
// @lc code=end

