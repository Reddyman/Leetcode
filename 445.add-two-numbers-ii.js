/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
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
  // Traverse each linked list, store in stacks
  // pop stacks to created new linked list
  // O(n) time
  // O(n) space

  let stack1 = []
  let stack2 = []

  while (l1 || l2) {
    if (l1) {
      stack1.push(l1.val)
      l1 = l1.next
    }
    if (l2) {
      stack2.push(l2.val)
      l2 = l2.next
    }
  }

  let sum = 0
  let newNode = new ListNode()
  while (stack1.length !== 0 || stack2.length !== 0) {
    if (stack1.length !== 0) sum += stack1.pop()
    if (stack2.length !== 0) sum += stack2.pop()
    newNode.val = sum % 10
    let nextHead = new ListNode(Math.floor(sum / 10))
    nextHead.next = newNode
    newNode = nextHead
    sum = Math.floor(sum / 10)
  }

  return newNode.val === 0 ? newNode.next : newNode
};
// @lc code=end

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

let LL1 = new ListNode(9)
LL1.next = new ListNode(1)
LL1.next.next = new ListNode(6)

let LL2 = new ListNode(0)

console.log(addTwoNumbers(LL1, LL2))