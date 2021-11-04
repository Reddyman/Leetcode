/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
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
 */
var BSTIterator = function(root) {
  this.stack = []
  this.currIndex = 0

  this.partialOrder(root)
};

BSTIterator.prototype.partialOrder = function(root) {
  let partialInOrder = (node) => {
    while (node !== null) {
      this.stack.push(node)
      node = node.left
    }
  }
  partialInOrder(root)
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  let top = this.stack.pop()
  if (top) {
    this.partialOrder(top.right)
    return top.val
  }
  return null
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

