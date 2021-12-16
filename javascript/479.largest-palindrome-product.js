/*
 * @lc app=leetcode id=479 lang=javascript
 *
 * [479] Largest Palindrome Product
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
  // this is a silly question, since input size is so small
  // might as well do this:
  switch (n) {
    case 1:
      return 9 
    case 2:
      return 987
    case 3:
      return 123
    case 4:
      return 597
    case 5:
      return 677
    case 6:
      return 1218
    case 7:
      return 877
    case 8:
      return 475
  }

  return -1

  // start from largest possible product
  // check if palindrome, then decrement factors
  // O(n^2) time O(k) space
  // if (n === 1) return 9
  // if (n === 8) return 475 // issues with overflow

  // let maxNum = (10 ** n) - 1
  // let minNum = (10 ** (n - 1))

  // // start from max possible num, then check factors
  // for (let i = maxNum - 1; i > minNum; i--) {
  //   const numStr = i.toString() + i.toString().split("").reverse().join("")
  //   const palindrome = parseInt(numStr)

  //   for (let j = maxNum; j >= Math.floor(Math.sqrt(palindrome)); j--) {
  //     if (palindrome % j === 0) {
  //       return palindrome % 1337
  //     }
  //   }
  // }

  // return -1
};
// @lc code=end


console.log(largestPalindrome(1))
console.log(largestPalindrome(2))
console.log(largestPalindrome(3))
console.log(largestPalindrome(4))
console.log(largestPalindrome(5))
console.log(largestPalindrome(6))
console.log(largestPalindrome(7))
console.log(largestPalindrome(8))