/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  // Build while traversing
  // O(n) time
  // O(n) space
  let newHead = new ListNode()
  while (head) {
    let newNode = new ListNode(head.val)
    newNode.next = newHead.next
    newHead.next = newNode
    head = head.next
  }
  return newHead.next
};
// @lc code=end

