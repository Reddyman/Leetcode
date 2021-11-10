/*
 * @lc app=leetcode id=672 lang=javascript
 *
 * [672] Bulb Switcher II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function(n, presses) {
  // Solution for +180IQ:
  // Mathmatical approach
  // O(dudeWhoah)
  return Math.min(1 << Math.min(n, 3), 1 + presses * Math.min(n, 3))

  // Solution for chumps:
  // DP approach
  // start with ["on", "on", ...]
  // base case:
  // 1. presses === 0
  // at every recusive subcall choose 1, 2, 3, 4 button pushes
  // cache results as strings Set('on', 'on-on', ...)
  // O(n^4) time
  // O(2^n) space

  // if (presses === 0) return 1

  // let cache = new Set()
  // let maxPossibleSize = 2 ** n
  // let dpHelper = (currState, rPresses) => {
  //   // don't include first state
  //   if (rPresses !== presses) {
  //     // add to cache
  //     let currStateString = currState.join("-")
  //     if (!cache.has(currStateString)) {
  //       cache.add(currStateString)
  //     }
  //   }
  //   // base case
  //   if (rPresses === 0) return
  //   // exit early if we already have
  //   // the max possible number of permutations
  //   if (cache.size === maxPossibleSize) return
  //   // recursive sub-calls
  //   rPresses--
  //   // Button 1
  //   dpHelper(currState.map(v => v === "on" ? "off": "on"), rPresses)
  //   // Button 2
  //   dpHelper(currState.map((v, k) => {
  //     if (k % 2 === 0) {
  //       return v === "on" ? "off": "on"
  //     }
  //     return v
  //   }), rPresses)
  //   // Button 3
  //   dpHelper(currState.map((v, k) => {
  //     if (k % 2 === 1) {
  //       return v === "on" ? "off": "on"
  //     }
  //     return v
  //   }),
  //   rPresses)
  //   // Button 4
  //   dpHelper(currState.map((v,  k) => {
  //     if (k % 3 === 0) {
  //       return v === "on" ? "off": "on"
  //     }
  //     return v
  //   }), rPresses)
  // }


  // let currState = new Array(n).fill("on")
  // dpHelper(currState, presses)

  // return cache.size
};
// @lc code=end

