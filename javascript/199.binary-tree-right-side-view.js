/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  // BFS traversal, keeping track of nodes at every level
  // return all nodes on the rightmost side of every level
  // O(n) time O(n) space
  if (!root) return []

  let queue     = [[root, 0]]
  let levelVals = []
  while (queue.length > 0) {
    let vals     = queue.shift()
    let currNode = vals[0]
    let level    = vals[1]
    if (levelVals[level]) {
      levelVals[level].push(currNode.val)
    } else {
      levelVals[level] = [currNode.val]
    }
    if (currNode.left) {
      queue.push([currNode.left, level + 1])
    }
    if (currNode.right) {
      queue.push([currNode.right, level + 1])
    }
  }
  return levelVals.map(v => v.pop())
};
// @lc code=end

