/*
 * @lc app=leetcode id=114 lang=cpp
 *
 * [114] Flatten Binary Tree to Linked List
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
    vector<int> preOrderValues;
    void preOrderTraversal(TreeNode *root)
    {
        if (!root)
        {
            return;
        }
        preOrderValues.push_back(root->val);
        if (root->left)
        {
            preOrderTraversal(root->left);
        }
        if (root->right)
        {
            preOrderTraversal(root->right);
        }
        return;
    }
    void flatten(TreeNode *root)
    {
        // DFS recursive approach
        // pre-order traversal of tree
        // O(n) time O(n) space
        preOrderTraversal(root);
        for (int i = 0; i < preOrderValues.size(); i++)
        {
            root->val = preOrderValues[i];
            root->left = nullptr;
            if (i + 1 < preOrderValues.size())
            {
                root->right = new TreeNode{};
                root = root->right;
            }
        }
    }
};
// @lc code=end
