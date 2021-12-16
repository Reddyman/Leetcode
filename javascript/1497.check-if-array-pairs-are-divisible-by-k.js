/*
 * @lc app=leetcode id=1497 lang=javascript
 *
 * [1497] Check If Array Pairs Are Divisible by k
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
  // brute force approach
  // find every pair, sum, modulo 5
  // O(n^2) time O(k) space
  // hash map approach
  // iterate once, store remainder with
  // num % k
  // iterate over hash map, seeking
  // matching remainders
  // O(n) time O(n) space

  let numMap = new Map()
  for (let num of arr) {
    let rem = num % k
    if (rem < 0) {
      rem += k
    }
    if (numMap.has(rem)) {
      numMap.set(rem, numMap.get(rem) + 1)
    } else {
      numMap.set(rem, 1)
    }
  }

  for (let [key, val] of numMap) {
    // iterate over vals
    if (key === 0) {
      if (val % 2 !== 0) {
        return false
      } else {
        numMap.delete(key)
      }
    } else {
      if (numMap.has(k - key)) {
        if (val === numMap.get(k - key)) {
          numMap.delete(k - key)
          numMap.delete(key)
        } else {
          return false
        }
      }
    }
  }
  return numMap.size === 0
};
// @lc code=end

