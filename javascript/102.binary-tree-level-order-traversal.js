/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  // O(n) time
  // O(n) space
  // store node + level
  let queue = []
  let levelOrderTraversal = []
  queue.unshift([root, 0])
  while (queue.length > 0) {
    let vals = queue.shift()
    let currNode = vals[0]
    let currLevel = vals[1]
    if (levelOrderTraversal[currLevel]) {
      levelOrderTraversal[currLevel].push(currNode.val)
    } else {
      levelOrderTraversal[currLevel] = [currNode.val]
    }
    if (currNode.left) {
      queue.push([currNode.left, currLevel+1])
    }
    if (currNode.right) {
      queue.push([currNode.right, currLevel+1])
    }
  }
  return levelOrderTraversal
};
// @lc code=end

