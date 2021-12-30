/*
 * @lc app=leetcode id=55 lang=cpp
 *
 * [55] Jump Game
 */

// @lc code=start
class Solution
{
private:
    unordered_set<int> numCache;

public:
    bool dfsHelper(vector<int> &nums, int pos)
    {
        // base cases
        if (pos == nums.size() - 1)
        {
            return true;
        }
        else if (pos + nums[pos] >= nums.size() - 1)
        {
            return true;
        }
        else if (nums[pos] < 1)
        {
            return false;
        }
        else if (pos >= nums.size())
        {
            return false;
        }
        else if (numCache.count(pos) > 0)
        {
            return false;
        }
        // recursive subcalls
        for (int i = nums[pos]; i > 0; i--)
        {
            if (dfsHelper(nums, pos + i))
            {
                return true;
            }
        }
        // cache subproblems
        numCache.insert(pos);
        return false;
    }
    bool canJump(vector<int> &nums)
    {
        // DFS recursive approach
        // at every index iterate the number of steps
        // until it becomes clear you can reach end
        // cache subproblems
        // O(n^2(averageNumOfSteps)) time O(n^(averageNumOfSteps)) space
        auto res = dfsHelper(nums, 0);
        return res;
    }
};
// @lc code=end
