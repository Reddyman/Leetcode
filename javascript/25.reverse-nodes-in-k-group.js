/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let stack = []
  let currHead = prevHead = head
  while (currHead) {
    stack.push(currHead.val)
    if (stack.length >= k) {
      while (stack.length) {
        prevHead.val = stack.pop()
        prevHead = prevHead.next
      }
    }
    currHead = currHead.next
  }
  return head
  // iterate k times with currHead, store in stack
  // when stack.length === k, pop stack
  // until empty storing values in prevHead
};
// @lc code=end

