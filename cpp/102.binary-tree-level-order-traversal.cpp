/*
 * @lc app=leetcode id=102 lang=cpp
 *
 * [102] Binary Tree Level Order Traversal
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
        int level;
    };
    vector<vector<int>> levelOrder(TreeNode *root)
    {
        // BFS traversal
        // keep track of levels
        // O(n) time O(n) space
        vector<vector<int>> resVect;
        if (!root)
            return resVect;
        queue<QueueVal> queuer;
        queuer.push(QueueVal{root, 0});
        while (queuer.size() > 0)
        {
            QueueVal vals = queuer.front();
            TreeNode *currNode = vals.root;
            int currLevel = vals.level;
            queuer.pop();
            // check if there exists previous vect at level
            if (currLevel == resVect.size())
            {
                vector<int> newVect = {currNode->val};
                resVect.push_back(newVect);
            }
            else
            {
                resVect[currLevel].push_back(currNode->val);
            }

            if (currNode->left)
            {
                queuer.push(QueueVal{currNode->left, currLevel + 1});
            }
            if (currNode->right)
            {
                queuer.push(QueueVal{currNode->right, currLevel + 1});
            }
        }
        return resVect;
    }
};
// @lc code=end
