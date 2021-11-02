/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
var zigzagLevelOrder = function(root) {
  // bfs variant
  // store node and level with flip switch
  // O(n) time
  // O(n) space
  if (!root) return []
  let queue = []
  let traversalOrder = []
  queue.unshift([root, 0])
  while (queue.length > 0) {
    let vals = queue.shift()
    let currNode = vals[0]
    let currLevel = vals[1]
    if (traversalOrder[currLevel]) {
      traversalOrder[currLevel].push(currNode.val)
    } else {
      traversalOrder[currLevel] = [currNode.val]
    }
    if (currNode.left) {
      queue.push([currNode.left, currLevel+1])
    }
    if (currNode.right) {
      queue.push([currNode.right, currLevel+1])
    }
  }
  // zig-zag ordering
  return traversalOrder.map((v, k) => {
    if (k % 2 === 1) {
      return v.reverse()
    }
    return v
  })
};
// @lc code=end

