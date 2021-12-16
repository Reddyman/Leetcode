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
  if (s.length === 0 || s.length % 2 !== 0) return false
  let stack = []
  for (let c of s) {
    let top = stack[stack.length - 1]
    if (c === "}" && top === "{") {
      stack.pop()
      continue
    }
    if (c === ")" && top === "(") {
      stack.pop()
      continue
    }
    if (c === "]" && top === "[") {
      stack.pop()
      continue
    }
    stack.push(c)
  }
  return stack.length === 0
};
// @lc code=end

