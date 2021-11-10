/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  // BFS traversal keep tracking of level
  // Return a string of csv to serialize/deserialize
  if (!root) return ''
  const queue = [root]
  const levelOrderTraversal = []
  while (queue.length > 0) {
    let currNode = queue.shift()

    if (!currNode) {
      levelOrderTraversal.push('null')
      continue
    }

    levelOrderTraversal.push(currNode.val)
    queue.push(currNode.left)
    queue.push(currNode.right)
  }
    
  return levelOrderTraversal.join(",")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  // BFS traversal keep tracking of level
  // NOTE: index is level
  if (!data || data.length === 0) return null

  const levelOrderTraversal = data.split(",")
  let root = new TreeNode(levelOrderTraversal[0])

  if (levelOrderTraversal.length === 1) return root

  const queue = [root]
  for (let i = 1; i < levelOrderTraversal.length; i++) {
    let leafNode = queue.shift()

    if (levelOrderTraversal[i] !== 'null') {
      let leftLeafNode = new TreeNode(levelOrderTraversal[i])
      leafNode.left = leftLeafNode
      queue.push(leftLeafNode)
    }

    i += 1
    if (levelOrderTraversal[i] !== 'null') {
      let rightLeafNode = new TreeNode(levelOrderTraversal[i])
      leafNode.right = rightLeafNode
      queue.push(rightLeafNode)
    }
  }

  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

