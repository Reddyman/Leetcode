/*
 * @lc app=leetcode id=650 lang=javascript
 *
 * [650] 2 Keys Keyboard
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  // Naive recursion
  // Either copy or paste at every subcall
  // Don't copy twice in a row
  // Base cases:
  // 1. 'A..'.length === n
  // 2. 'A..'.length > n
  // 3. Operations counter exceeds min
  // O(n^2) time
  // O(n^2) space
  if (n === 1) return 0
  let minOps = null
  let dfsHelper = (subStr, rOpsCounter, clipboard, prevCopied) => {
    // Base cases
    if (subStr.length > n) return
    if (minOps !== null && rOpsCounter >= minOps) return
    if (subStr.length === n) {
      minOps = Math.min(minOps ?? Number.MAX_SAFE_INTEGER, rOpsCounter)
      return
    }
    // Recursive cases
    if (!prevCopied) {
      // copy
      let newClipboard = subStr
      dfsHelper(subStr, rOpsCounter + 1, newClipboard, true)
    }
    // paste
    let newSubStr = subStr + clipboard
    dfsHelper(newSubStr, rOpsCounter + 1, clipboard, false)
  }

  dfsHelper('A', 1, 'A', true)

  return minOps
};
// @lc code=end

