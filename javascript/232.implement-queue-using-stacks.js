/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function() {
  this.inStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.inStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  let tempStack = []
  while (this.inStack.length > 0) {
    tempStack.push(this.inStack.pop())
  }
  let res = tempStack.pop()
  while (tempStack.length > 0) {
    this.inStack.push(tempStack.pop())
  }
  return res
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  let tempStack = []
  while (this.inStack.length > 0) {
    tempStack.push(this.inStack.pop())
  }
  let res = tempStack.pop()
  this.inStack.push(res)
  while (tempStack.length > 0) {
    this.inStack.push(tempStack.pop())
  }
  return res
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.inStack.length  === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

