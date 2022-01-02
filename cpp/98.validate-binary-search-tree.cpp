/*
 * @lc app=leetcode id=98 lang=cpp
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution
{
public:
    struct QueueVal
    {
        TreeNode *root;
        long min;
        long max;
    };
    bool isValidBST(TreeNode *root)
    {
        // DFS recursive approach
        // launch a new DFS at every node
        // ensure every value to the left is lower than root
        // ensure every value to the right is greater than root
        // O(n^2) time O(n^2) space
        // Inorder traversal approach
        // inorder traversal will yield all nodes in sorted order
        // if it is binary search tree
        // O(n) time O(n) space
        // BFS approach
        // BFS, but ensure that at every level we keep track of a min
        // and a max possible value based on parent val
        // O(n) time O(k) space
        queue<QueueVal> queuer;
        queuer.push(QueueVal{root, LONG_MIN, LONG_MAX});
        while (queuer.size() > 0)
        {
            QueueVal currVals = queuer.front();
            TreeNode *currNode = currVals.root;
            long minV = currVals.min;
            long maxV = currVals.max;
            queuer.pop();
            if (currNode->val >= maxV || currNode->val <= minV)
            {
                return false;
            }
            if (currNode->left)
            {
                QueueVal leftNode = {currNode->left, minV, currNode->val};
                queuer.push(leftNode);
            }
            if (currNode->right)
            {
                QueueVal rightNode = {currNode->right, currNode->val, maxV};
                queuer.push(rightNode);
            }
        }
        return true;
    }
};
// @lc code=end
