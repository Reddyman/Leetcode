/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function(l1, l2) {
  let head = currNode = new ListNode()
  while (l1 || l2) {
    if (l1 && !l2) {
      currNode.next = new ListNode(l1.val)
      l1 = l1.next
    } else if (!l1 && l2) {
      currNode.next = new ListNode(l2.val)
      l2 = l2.next
    } else if (l1.val > l2.val) {
      currNode.next = new ListNode(l2.val)
      l2 = l2.next
    } else {
      currNode.next = new ListNode(l1.val)
      l1 = l1.next
    }
    currNode = currNode.next
  }
  return head.next
};
// @lc code=end

