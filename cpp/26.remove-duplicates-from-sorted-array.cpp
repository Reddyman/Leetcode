/*
 * @lc app=leetcode id=26 lang=cpp
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
class Solution
{
public:
    int removeDuplicates(vector<int> &nums)
    {
        // keep track of curr val
        // iterate and push_front when curr val is
        // not equal to next val
        if (nums.size() < 2)
            return nums.size();
        int currVal = nums[0];
        int uniqNums = 1;
        for (int i = 1; i < nums.size(); i++)
        {
            if (currVal != nums[i])
            {
                currVal = nums[i];
                uniqNums++;
            }
            else
            {
                nums.erase(nums.begin() + i);
                i--;
            }
        }
        return uniqNums;
    }
};
// @lc code=end
