/*
 * @lc app=leetcode id=237 lang=javascript
 *
 * [237] Delete Node in a Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  // Iterate over array once, keeping track
  // of all values
  // Iterate over values, skipping first value
  // and setting last node.next to null
  // O(n) time
  // O(n) space
  let vals = []
  let currNode = node
  while (currNode) {
    vals.push(currNode.val)
    currNode = currNode.next
  }
  currNode = node
  for (let i = 1;  i < vals.length; i++) {
    currNode.val = vals[i]
    if (i === vals.length -1) {
      currNode.next = null
      break
    }
    currNode = currNode.next
  }
};
// @lc code=end

