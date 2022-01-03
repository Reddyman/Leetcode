/*
 * @lc app=leetcode id=173 lang=cpp
 *
 * [173] Binary Search Tree Iterator
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
class BSTIterator
{
public:
    stack<TreeNode *> stacker;
    BSTIterator(TreeNode *root)
    {
        // inorder traversal is left D right
        // traverse partial order 'left'
        // store order in call
        // O(n) time O(n) space
        partialOrder(root);
    }

    void partialOrder(TreeNode *root)
    {
        while (root)
        {
            stacker.push(root);
            root = root->left;
        }
        return;
    }

    int next()
    {
        TreeNode *top = stacker.top();
        stacker.pop();
        if (top)
        {
            partialOrder(top->right);
            return top->val;
        }
        return -1;
    }

    bool hasNext()
    {
        return stacker.size() > 0;
    }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator* obj = new BSTIterator(root);
 * int param_1 = obj->next();
 * bool param_2 = obj->hasNext();
 */
// @lc code=end
