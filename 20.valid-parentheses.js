/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) {
    return false
  }
  let stack = []
  for (subStr of s) {
    let top = stack[stack.length-1]
    if (subStr === ")" && top === "(") {
      stack.pop()
      continue
    }
    if (subStr === "]" && top === "[") {
      stack.pop()
      continue
    }
    if (subStr === "}" && top === "{") {
      stack.pop()
      continue
    }
    stack.push(subStr)
  }
  return stack.length === 0
};
// @lc code=end

