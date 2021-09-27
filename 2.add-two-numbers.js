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
  let currNode = head = new ListNode()
  let carry = 0

  while (l1 || l2) {
    currNode.next = new ListNode()
    currNode = currNode.next
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    if (val >= 10) {
      currNode.val = val % 10
      carry = 1
    } else {
      currNode.val = val
      carry = 0
    }
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }
  if (carry !== 0) {
    currNode.next = new ListNode(carry)
  }
  return head.next
};
// @lc code=end

