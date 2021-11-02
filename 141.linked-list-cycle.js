/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Tortoise and hare algorithm
    // O(n) time
    // O(k) space
    let hNode = tNode = head
    let counter = 0
    while (hNode && tNode) {
      if (counter % 2 === 1) {
        hNode = hNode.next
        tNode = tNode.next
      } else {
        hNode = hNode.next
      }
      if (hNode === tNode) {
        return true
      }
      counter++
    }
    return false
    // create hashmap while iterating to check for cycle
    // O(n) time
    // O(n) space
    // let nodeMap = new Map()
    // let currNode = head
    // while (currNode) {
    //   if (nodeMap.has(currNode)) {
    //     return true
    //   }
    //   nodeMap.set(currNode)
    //   currNode = currNode.next
    // }
    // return false
};
// @lc code=end

