/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start

var MinStack = function() {
   this.currStack = [] 
   this.minVals   = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.currStack.push(val)
  if (val <= this.minVals[this.minVals.length - 1] || this.minVals.length === 0) {
    this.minVals.push(val)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  console.log(this.currStack)
  console.log(this.minVals)
  let num = this.currStack.pop()
  if (num === this.minVals[this.minVals.length-1]) {
    this.minVals.pop()
  }
  return num
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.currStack[this.currStack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minVals[this.minVals.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

