/*
 * @lc app=leetcode id=380 lang=javascript
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start

var RandomizedSet = function() {
  this.map   = new Map()
  this.vals  = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) return false
  this.vals.push(val)
  this.map.set(val, this.vals.length - 1)
  return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) return false
  // swap indexes
  let indexA = this.map.get(val)
  let indexB = this.vals.length - 1
  let temp   = this.vals[indexA]
  this.vals[indexA] = this.vals[indexB]
  this.vals[indexB] = temp
  this.vals.pop()
  this.map.set(this.vals[indexA], indexA)
  this.map.delete(val)
  return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.vals[Math.floor(Math.random() * this.vals.length)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

