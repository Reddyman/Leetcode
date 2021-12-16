/*
 * @lc app=leetcode id=1 lang=cpp
 *
 * [1] Two Sum
 */

// @lc code=start
class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        vector<int> resVect;
        unordered_map<int, int> numMap;
        for (int i = 0; i < nums.size(); i++)
        {
            if (numMap.find(target - nums[i]) != numMap.end())
            {
                resVect.push_back(numMap[target - nums[i]]);
                resVect.push_back(i);
                return resVect;
            }
            else
            {
                numMap[nums[i]] = i;
            }
        }
        return resVect;
    }
};
// @lc code=end
