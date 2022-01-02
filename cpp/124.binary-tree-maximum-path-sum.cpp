/*
 * @lc app=leetcode id=124 lang=cpp
 *
 * [124] Binary Tree Maximum Path Sum
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
    int maxPathVal;
    int dfsHelper(TreeNode *root)
    {
        if (!root)
            return 0;
        int leftMax = max(dfsHelper(root->left), 0);
        int rightMax = max(dfsHelper(root->right), 0);

        maxPathVal = max(maxPathVal, root->val + leftMax + rightMax);
        return root->val + max(leftMax, rightMax);
    }
    int maxPathSum(TreeNode *root)
    {
        // calculate max of left and right at every node
        if (!root)
            return 0;
        maxPathVal = root->val;
        dfsHelper(root);
        return maxPathVal;
    }
};
// @lc code=end
