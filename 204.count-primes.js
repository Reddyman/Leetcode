/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  // NEW solution for +180IQ:
  // Also known as Sieve of Eratosthenes
  let sieve = new Array(n).fill(true)
  let primes = []
  for (let i = 2; i < n ** .5; i++) {
    if (sieve[i]) {
      for (let j = i ** 2; j < n; j += i) {
        sieve[j] = false
      }
    }
  }
  // NOTE: 0 and 1 are not prime
  return sieve.reduce((acc, v, k) =>
    v && k > 1 ? acc += 1 : acc, 0
  )


  // OLD solution for chumps:
  // let isPrime = (num) => {
  //   for (let j of cache) {
  //     if (num % j === 0) return false
  //     if (j >= num ** .5) break
  //   }
  //   return true
  // }

  // if (n <= 2) return 0
  // if (n <= 3) return 1
  // if (n <= 5) return 2
  // if (n <= 6) return 3

  // let cache = new Set([2, 3])

  // for (let i = 6; i <= n; i += 6) {
  //   if (isPrime(i-1)) cache.add(i-1)
  //   if (i >= (n-1)) break
  //   if (isPrime(i+1)) cache.add(i+1)
  // }

  // return cache.size
};
// @lc code=end

