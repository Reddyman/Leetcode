/*
 * @lc app=leetcode id=103 lang=cpp
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
    vector<vector<int>> zigzagLevelOrder(TreeNode *root)
    {
        // BFS traversal
        // keeping track of order
        // flip direction from left<->right
        // based on even/odd
        // O(n) time O(n) space
        vector<vector<int>> resVect;
        if (!root)
            return resVect;
        queue<QueueVal> myQueue;
        myQueue.push(QueueVal{root, 0});
        while (myQueue.size() > 0)
        {
            QueueVal vals = myQueue.front();
            TreeNode *currNode = vals.root;
            int currLevel = vals.level;
            myQueue.pop();
            if (currLevel == resVect.size())
            {
                // if no vect present at current level
                vector<int> newVect{currNode->val};
                resVect.push_back(newVect);
            }
            else
            {
                resVect[currLevel].push_back(currNode->val);
            }

            if (currNode->left)
            {
                myQueue.push(QueueVal{currNode->left, currLevel + 1});
            }
            if (currNode->right)
            {
                myQueue.push(QueueVal{currNode->right, currLevel + 1});
            }
        }

        // bad way to flip alternating levels
        for (int i = 0; i < resVect.size(); i++)
        {
            if (i % 2 == 1)
            {
                reverse(resVect[i].begin(), resVect[i].end());
            }
        }

        return resVect;
    }
};
// @lc code=end
