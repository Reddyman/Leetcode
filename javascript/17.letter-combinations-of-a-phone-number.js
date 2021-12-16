/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // DFS brute force
    // base cases
    // 1. End of digits
    // recursive subcalls
    // every possible digit character

    if (digits === "") return []

    const digitToAlpha = {
      "2": ['a', 'b', 'c'],
      "3": ['d', 'e', 'f'],
      "4": ['g', 'h', 'i'],
      "5": ['j', 'k', 'l'],
      "6": ['m', 'n', 'o'],
      "7": ['p', 'q', 'r', 's'],
      "8": ['t', 'u', 'v'],
      "9": ['w', 'x', 'y', 'z']
    }
    let strArr = []
    const dfsHelper = (currStr, index) => {
      // base cases
      if (index > digits.length - 1) {
        strArr.push(currStr)
        return
      }
      for (let char of digitToAlpha[digits[index]]) {
        dfsHelper(currStr + char, index + 1)
      }
    }

    dfsHelper("", 0)

    return strArr
};
// @lc code=end

