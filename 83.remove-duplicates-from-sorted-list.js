/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
var deleteDuplicates = function(head) {
  let myHead = currNode = new ListNode(Number.NaN)

  while (head) {
    if (currNode.val !== head.val) {
      currNode.next = new ListNode(head.val)
      currNode = currNode.next
    }
    head = head.next
  }
  return myHead.next
};
// @lc code=end

