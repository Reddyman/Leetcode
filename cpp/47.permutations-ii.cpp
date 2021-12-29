/*
 * @lc app=leetcode id=47 lang=cpp
 *
 * [47] Permutations II
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
        return resVect;
    }
    vector<vector<int>> permuteUnique(vector<int> &nums)
    {
        // DFS recursive approach to generate all permutations
        // clean-up results to return only unique combinations
        // O(n^2) time O(n^2) space
        vector<int> curr{};
        vector<vector<int>> resVect = dfsHelper(curr, nums);

        // c++ uniqueness in multidimensional vector magic
        sort(resVect.begin(), resVect.end());
        resVect.erase(unique(resVect.begin(), resVect.end()), resVect.end());

        return resVect;
    }
};
// @lc code=end
