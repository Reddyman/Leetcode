/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
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
var findBottomLeftValue = function(root) {
  // BFS -> return last element value
  // O(n) time
  // O(k) space

  let queue = [root]
  let currNode
  while (queue.length > 0) {
    currNode = queue.shift()
    // right
    if (currNode.right) {
      queue.push(currNode.right)
    }
    // left
    if (currNode.left) {
      queue.push(currNode.left)
    }
  }

  return currNode.val
};
// @lc code=end

