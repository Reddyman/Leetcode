/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // Iterate pointers of both linked lists
  // See if they end up in the same place
  // Iterate again using counters to find intersection
  // O(n+m) time
  // O(k) space
  let currA = headA
  let currB = headB
  let counterA = 1
  let counterB = 1
  while (currA.next || currB.next) {
    if (currA === currB) {
      break
    }
    if (currA.next) {
      counterA++
      currA = currA.next
    }
    if (currB.next) {
      counterB++
      currB = currB.next
    }
  }

  if (currA !== currB) return null

  currA = headA
  currB = headB
  while (currA !== currB) {
    if (counterA === counterB) {
      currA = currA.next
      currB = currB.next
      counterA--
      counterB--
    } else if (counterA > counterB) {
      counterA--
      currA = currA.next
    } else {
      counterB--
      currB = currB.next
    }
  }
  return currA
};
// @lc code=end

