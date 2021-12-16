/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start

class TrieNode {
  constructor() {
    this.children = new Map()
    this.endOfWord = false
  }
}

var Trie = function() {
  this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let currNode = this.root
  for (let char of word) {
    if (!currNode.children.has(char)) {
      currNode.children.set(char, new TrieNode())
    }
    currNode = currNode.children.get(char)
  }
  currNode.endOfWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  // DFS
  let currNode = this.root
  for (let char of word) {
    if (!currNode.children.has(char)) {
      return false
    }
    currNode = currNode.children.get(char)
  }
  return currNode.endOfWord
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  // DFS
  // recursive approach example
  let dfsHelper = (root, index) => {
    if (!root) return false
    if (index >= prefix.length) return true
    if (!root.children.has(prefix[index])) return false

    return dfsHelper(root.children.get(prefix[index]), index + 1)
  }

  return dfsHelper(this.root, 0)
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

