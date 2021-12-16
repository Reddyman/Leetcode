/*
 * @lc app=leetcode id=1448 lang=javascript
 *
 * [1448] Count Good Nodes in Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
  // DFS recursive approach
  // starting from root, traverse down to every
  // leaf node keeping track of max, increment
  // global counter every time current max changes
  // base cases
  // 1. leaf node
  // O(nodes) time O(n) space
  if (!root) return 0

  let goodNodeCounter = 0
  const dfsHelper = (currNode, currMax) => {
    // base cases
    if (!currNode) return

    if (currNode.val >= currMax) {
      currMax = currNode.val
      goodNodeCounter++
    }
    dfsHelper(currNode.left, currMax)
    dfsHelper(currNode.right, currMax)
  }

  dfsHelper(root, root.val)

  return goodNodeCounter
};
// @lc code=end

