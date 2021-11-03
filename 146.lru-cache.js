/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */

class Node {
  constructor(key, val, next = null, prev = null) {
    this.key = key
    this.val = val
    this.next = next
    this.prev = prev
  }
}

var LRUCache = function(capacity) {
  this._capacity = capacity
  this._cache =  new Map()
  this._head = new Node()
  this._tail = new Node()
  this._head.next = this._tail
  this._tail.prev = this._head
};

LRUCache.prototype.remove = function(node) {
  let prevNode = node.prev
  let nextNode = node.next
  prevNode.next = nextNode
  nextNode.prev = prevNode
}

LRUCache.prototype.insert = function(node) {
  let prevNode = this._head
  let nextNode = this._head.next
  prevNode.next = node
  nextNode.prev = node
  node.prev = prevNode
  node.next = nextNode
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this._cache.has(key)) {
    this.remove(this._cache.get(key))
    this.insert(this._cache.get(key))
    return this._cache.get(key).val
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this._cache.get(key)) {
    this.remove(this._cache.get(key))
  }
  this._cache.set(key, new Node(key, value))
  this.insert(this._cache.get(key))
  if (this._cache.size > this._capacity) {
    // remove from the list and delete LRU from cache
    let lru = this._tail.prev
    this.remove(lru)
    this._cache.delete(lru.key)
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

