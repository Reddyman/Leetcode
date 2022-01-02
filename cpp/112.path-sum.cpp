/*
 * @lc app=leetcode id=112 lang=cpp
 *
 * [112] Path Sum
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
    bool dfsHelper(TreeNode *root, int currSum, int targetSum)
    {
        // base cases
        if (!root)
        {
            return false;
        }
        if (!root->left && !root->right)
        {
            return (currSum + root->val) == targetSum;
        }
        // recursive subcalls
        bool res = dfsHelper(root->left, currSum + root->val, targetSum) ||
                   dfsHelper(root->right, currSum + root->val, targetSum);
        return res;
    };
    bool hasPathSum(TreeNode *root, int targetSum)
    {
        // DFS recursive approach
        // base cases
        // 1. Leaf node
        // O(n) time O(n) space
        if (!root)
            return false;
        return dfsHelper(root, 0, targetSum);
    }
};
// @lc code=end
