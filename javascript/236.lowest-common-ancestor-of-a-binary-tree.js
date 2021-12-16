/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
    // DFS left/right
    // Base cases:
    // If root is p or q, return root
    // If left and right subtree has p or q return root
    // If no value found left, return right
    // If no value found right, return left
    // O(n) time
    // O(n) space
    if (root.val === p.val || root.val === q.val) {
      return root
    }
    if (!root.left && !root.right) return null

    let left  = null
    let right = null
    if (root.left) {
      left = lowestCommonAncestor(root.left, p, q)
    }
    if (root.right) {
      right = lowestCommonAncestor(root.right, p, q)
    }
    if (left && right) {
      return root
    }
    return left === null ? right : left
};
// @lc code=end

