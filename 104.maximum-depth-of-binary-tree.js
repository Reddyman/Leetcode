/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
var maxDepth = function(root) {
  // DFS pre-order traversal keeping track of depth
  // O(n) time
  // O(n) space
  let maxDepth = 0
  const dfsHelper = (root, currDepth) => {
    if (!root) return
    if (currDepth > maxDepth) {
      maxDepth = currDepth
    }
    if (root.left) {
      dfsHelper(root.left, currDepth + 1)
    }
    if (root.right) {
      dfsHelper(root.right, currDepth + 1)
    }
  }

  dfsHelper(root, 1)

  return maxDepth
};
// @lc code=end

