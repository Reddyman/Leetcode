/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // iterate and store values
  // calculate if it is a palindrome
  // O(n) time O(n) space

  let nums = []
  let currNode = head
  while (currNode) {
    nums.push(currNode.val)
    currNode = currNode.next
  }

  return nums.join("_") === nums.reverse().join("_")
};
// @lc code=end

