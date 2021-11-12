/*
 * @lc app=leetcode id=273 lang=javascript
 *
 * [273] Integer to English Words
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  // 00003 -> one, two, three, etc...
  // 00020 -> ten, eleven, twelve, etc...
  // 00100 -> one hundred, two hundred (ones + hundred)
  // 01000 -> one thousand, two thousand (ones + thousand)
  // 10000-20000 -> ten thousand, twenty thousand (teens + thousand)
  // 20000-10000 -> twenty thousand, thirty thousand
  // 100000 -> hundred thousand, two hundred thousand
  // Use lookup tables for digit -> word
  // Cycles occur every num % (10 ^ 3) === 0,
  // with a "", thousand, million, billion prefix
  // Iterate every 3 digits and handle with helper
  // O(n) time
  // O(k) space

  if (num === 0) return 'Zero'

  const helper = (strObj, num) => {
    if (num === 0) {
      return
    } else if (num < 20) {
      strObj.str += LESS_THAN_TWENTY[num] + " "
      return
    } else if (num < 100) {
      strObj.str += TENS[Math.floor(num / 10)] + " "
      helper(strObj, num % 10)
    } else {
      strObj.str += LESS_THAN_TWENTY[Math.floor(num / 100)] + " Hundred "
      helper(strObj, num % 100)
    }
  }

  const THOUSANDS = ['', 'Thousand', 'Million', 'Billion']
  const LESS_THAN_TWENTY = ['', 'One', 'Two', 'Three', 'Four',
    'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven',
    'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen', 'Nineteen']
  const TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty',
    'Sixty', 'Seventy', 'Eighty', 'Ninety']

  let rWord = ''
  let digit = 0
  while (num > 0) {
    if (num % 1000 != 0) {
      let tempWord = { str: '' }
      helper(tempWord, num % 1000)
      rWord = (tempWord.str + THOUSANDS[digit] + " ") + rWord
    }
    digit++
    num = Math.floor(num / 1000)
  }
  return rWord.trim()
};
// @lc code=end

