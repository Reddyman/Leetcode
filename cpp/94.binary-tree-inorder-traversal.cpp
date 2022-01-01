/*
 * @lc app=leetcode id=94 lang=cpp
 *
 * [94] Binary Tree Inorder Traversal
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
    vector<int> inorderVals;
    void dfsHelper(TreeNode *root)
    {
        if (!root)
        {
            return;
        }
        if (root->left)
        {
            dfsHelper(root->left);
        }
        inorderVals.push_back(root->val);
        if (root->right)
        {
            dfsHelper(root->right);
        }
        return;
    }
    vector<int> inorderTraversal(TreeNode *root)
    {
        // DFS recursive approach
        // O(n) time O(n) space
        dfsHelper(root);
        return inorderVals;
    }
};
// @lc code=end
