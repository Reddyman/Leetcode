/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  // Build hashmap of nodes, then build copy
  // O(n) time
  // O(n) space
  if (!head) return null
  let nodeMap = new Map()
  let currNode = head
  // create map of nodes
  while (currNode) {
    nodeMap.set(currNode, new Node(currNode.val))
    currNode = currNode.next
  }
  // build copy with pointers
  currNode = head
  while (currNode) {
    nodeMap.get(currNode).next = nodeMap.get(currNode.next) ?? null
    nodeMap.get(currNode).random = nodeMap.get(currNode.random) ?? null
    currNode = currNode.next
  }
  return nodeMap.get(head)
};
// @lc code=end

