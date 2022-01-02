/*
 * @lc app=leetcode id=106 lang=cpp
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
    TreeNode *buildHelper(int postEnd, int inStart, int inEnd, vector<int> &inorder, vector<int> &postorder)
    {
        if (postEnd < 0 || inStart > inEnd)
        {
            return NULL;
        }

        TreeNode *root = new TreeNode(postorder[postEnd]);
        int inIndex = 0;
        for (int i = inStart; i <= inEnd; i++)
        {
            if (inorder[i] == root->val)
                inIndex = i;
        }

        root->right = buildHelper(postEnd - 1, inIndex + 1, inEnd, inorder, postorder);
        root->left = buildHelper(postEnd - inEnd + inIndex - 1, inStart, inIndex - 1, inorder, postorder);

        return root;
    }
    TreeNode *buildTree(vector<int> &inorder, vector<int> &postorder)
    {
        // postorder = L R D
        // inorder = L D R
        // postorder traversal the rightmost element is the root of the tree
        // every element in inorder traversal to the left of the that element
        // is on the leftsubtree of that root, and same for the right
        // construct recursively
        // O(n) time O(k) space
        int postEnd = postorder.size() - 1;
        int inStart = 0;
        int inEnd = inorder.size() - 1;
        return buildHelper(postEnd, inStart, inEnd, inorder, postorder);
    }
};
// @lc code=end
