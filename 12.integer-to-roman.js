/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let romanStr = ""
  while (num > 0) {
    if (num >= 1000) {
      num -= 1000
      romanStr += "M"
      continue
    }
    if (num >= 900) {
      num -= 900
      romanStr += "CM"
      continue
    }
    if (num >= 500) {
      num -= 500
      romanStr += "D"
      continue
    }
    if (num >= 400) {
      num -= 400
      romanStr += "CD"
      continue
    }
    if (num >= 100) {
      num -= 100
      romanStr += "C"
      continue
    }
    if (num >= 90) {
      num -= 90
      romanStr += "XC"
      continue
    }
    if (num >= 50) {
      num -= 50
      romanStr += "L"
      continue
    }
    if (num >= 40) {
      num -= 40
      romanStr += "XL"
      continue
    }
    if (num >= 10) {
      num -= 10
      romanStr += "X"
      continue
    }
    if (num >= 9) {
      num -= 9
      romanStr += "IX"
      continue
    }
    if (num >= 5) {
      num -= 5
      romanStr += "V"
      continue
    }
    if (num >= 4) {
      num -= 4
      romanStr += "IV"
      continue
    }
    if (num >= 1) {
      num -= 1
      romanStr += "I"
      continue
    }
  }
  return romanStr
};
// @lc code=end

