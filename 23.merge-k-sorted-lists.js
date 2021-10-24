/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0 ||
      (!lists.some(v => v !== null))) return null

  let head = currNode = new ListNode()
  // lists = lists.reduce(v => v !== null)
  // iterate until no nodes remain
  while (lists.some(v => v !== null)) {
    // compare each node val in each list and add min
    let selectedIndex = -1
    currNode.val = Number.MAX_SAFE_INTEGER
    for (let [index, node] of lists.entries()) {
      if (!node) continue
      if (node.val < currNode.val) {
        currNode.val = node.val
        selectedIndex = index
      }
    }
    // increment pointer in chosen list
    lists[selectedIndex] = lists[selectedIndex] ? lists[selectedIndex].next : null
    if (!lists.some( v => v !== null)) break
    currNode.next = new ListNode()
    currNode = currNode.next
  }
  return head
};
// @lc code=end

