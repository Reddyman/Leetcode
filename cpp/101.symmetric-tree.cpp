/*
 * @lc app=leetcode id=101 lang=cpp
 *
 * [101] Symmetric Tree
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
    bool isSymmetric(TreeNode *root)
    {
        // BFS iterative approach
        // BFS over both trees iteratively
        // return false if values don't match
        // O(n) time O(k) space
        if (!root->left && !root->right)
        {
            return true;
        }
        if ((!root->left && root->right) || (root->left && !root->right))
        {
            return false;
        }
        queue<TreeNode *> queueOne;
        queueOne.push(root->left);
        queue<TreeNode *> queueTwo;
        queueTwo.push(root->right);
        while (queueOne.size() > 0 && queueTwo.size() > 0)
        {
            TreeNode *currNodeOne = queueOne.front();
            queueOne.pop();
            TreeNode *currNodeTwo = queueTwo.front();
            queueTwo.pop();
            if (currNodeOne->val != currNodeTwo->val)
            {
                return false;
            }
            // extra checks
            if ((currNodeOne->left && !currNodeTwo->right) ||
                (currNodeOne->right && !currNodeTwo->left) ||
                (currNodeTwo->left && !currNodeOne->right) ||
                (currNodeTwo->right && !currNodeOne->left))
            {
                return false;
            }
            // continue BFS, but from right->left for one queue
            if (currNodeOne->left)
            {
                queueOne.push(currNodeOne->left);
            }
            if (currNodeOne->right)
            {
                queueOne.push(currNodeOne->right);
            }
            if (currNodeTwo->right)
            {
                queueTwo.push(currNodeTwo->right);
            }
            if (currNodeTwo->left)
            {
                queueTwo.push(currNodeTwo->left);
            }
        }

        return queueOne.size() == 0 && queueTwo.size() == 0;
    }
};
// @lc code=end
