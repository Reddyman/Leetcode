/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
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
  // BFS keeping track of order
  // O(n) time
  // O(n) space
  if (!root) return root
  let traversalOrder = []
  let queue = []
  queue.unshift([root, 0])
  while (queue.length > 0) {
    let vals = queue.shift()
    let currentNode = vals[0]
    let level = vals[1]

    if (traversalOrder[level]) {
      traversalOrder[level].push(currentNode)
    } else {
      traversalOrder[level] = [currentNode]
    }

    if (currentNode.left) {
      queue.unshift([currentNode.left, level+1])
    }
    if (currentNode.right) {
      queue.unshift([currentNode.right, level+1])
    }
  }

  for (let i = 0; i < traversalOrder.length; i++) {
    for (let j = traversalOrder[i].length-1; j >= 0; j--) {
      traversalOrder[i][j].next = traversalOrder[i][j-1]
    }
  }

  return root
};
// @lc code=end

