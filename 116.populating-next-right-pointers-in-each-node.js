/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  // BFS, keeping track of levels
  // O(n) time
  // O(n) space
  if (!root) return root
  let traversalOrder = []
  let queue = []
  queue.unshift([root, 0])
  while (queue.length > 0) {
    let vals = queue.shift()
    let currNode = vals[0]
    let level = vals[1]
    if (traversalOrder[level]) {
      traversalOrder[level].push(currNode)
    } else {
      traversalOrder[level] = [currNode]
    }
    if (currNode.left) {
      queue.unshift([currNode.left, level + 1])
    }
    if (currNode.right) {
      queue.unshift([currNode.right, level + 1])
    }
  }
  // Build next right pointers
  for (let i = 0; i < traversalOrder.length; i++) {
    for (let j = traversalOrder[i].length-1; j >= 1; j--) {
      traversalOrder[i][j].next = traversalOrder[i][j-1]
    }
  }
  return root
};
// @lc code=end

