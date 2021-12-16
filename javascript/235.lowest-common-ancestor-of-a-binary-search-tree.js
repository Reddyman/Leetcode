/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // Traverse tree from root
  // if root.val is less than p and q, move right
  // if root.val is greater than p and q, move left
  // otherwise return root
  // O(log(n)) time
  // O(k) space
  let currNode = root
  // p and q are guaranteed to be in the input tree
  while (true) {
    if (p.val > currNode.val && q.val > currNode.val) {
      currNode = currNode.right
    } else if (p.val < currNode.val && q.val < currNode.val) {
      currNode = currNode.left
    } else {
      return currNode
    }
  }
};
// @lc code=end

