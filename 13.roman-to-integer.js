/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const mappings = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  } 
  let prev = mappings[s[0]]
  let rSum = 0
  let strArr = s.split("")
  for (let i = 0; i < strArr.length; i++) {
    val = mappings[strArr[i]]
    if (val > prev) {
      rSum += val + -2 * prev
    } else {
      rSum += val
    }
    prev = mappings[strArr[i]]
  }
  return rSum
};
// @lc code=end

