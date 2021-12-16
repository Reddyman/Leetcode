/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function(head) {
  if (!head) return null
  if (!head.next) return head
  let originalHead = head

  while (head) {
    let currVal = head.next.val, preVal = head.val
    head.val = currVal
    head.next.val = preVal
    if (!head.next.next || !head.next.next.next) {
      break
    } else {
      head = head.next.next
    }
  }
  return originalHead
};
// @lc code=end

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(3)
a.next.next.next = new ListNode(4)

console.log(swapPairs(a))