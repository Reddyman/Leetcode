/*
 * @lc app=leetcode id=46 lang=cpp
 *
 * [46] Permutations
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> dfsHelper(vector<int> &curr, vector<int> &remainder)
    {
        vector<vector<int>> resVect;
        if (remainder.size() == 0)
        {
            resVect.push_back(curr);
        }
        else
        {
            for (int i = 0; i < remainder.size(); i++)
            {
                vector<int> currCopy = curr;
                vector<int> remainderCopy = remainder;
                currCopy.push_back(remainderCopy[i]);
                remainderCopy.erase(remainderCopy.begin() + i);
                vector<vector<int>> res = dfsHelper(currCopy, remainderCopy);
                for (vector<int> v : res)
                {
                    resVect.push_back(v);
                }
            }
        }
        return resVect;
    }
    vector<vector<int>> permute(vector<int> &nums)
    {
        // DFS recursive approach over subtree
        // O(n^2) time O(n^2) space
        vector<int> curr = {};
        return dfsHelper(curr, nums);
    }
};
// @lc code=end
