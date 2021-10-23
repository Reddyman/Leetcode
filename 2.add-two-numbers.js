/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = currNode = new ListNode()
  let carry = 0
  while (l1 || l2) {
    if (!l1) {
      let sum = l2.val + carry
      currNode.next = new ListNode(sum % 10)
      currNode = currNode.next
      l2 = l2.next
      carry = Math.floor(sum / 10)
    } else if (!l2) {
      let sum = l1.val + carry
      currNode.next = new ListNode(sum % 10)
      currNode = currNode.next
      l1 = l1.next
      carry = Math.floor(sum / 10)
    } else {
      let sum = l1.val + l2.val + carry
      currNode.next = new ListNode(sum % 10)
      currNode = currNode.next
      l1 = l1 ? l1.next : null
      l2 = l2 ? l2.next : null
      carry = Math.floor(sum / 10)
    }
  }
  if (carry > 0) {
    currNode.next = new ListNode(carry)
  }
  return head.next
};
// @lc code=end

