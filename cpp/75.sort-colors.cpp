/*
 * @lc app=leetcode id=75 lang=cpp
 *
 * [75] Sort Colors
 */

// @lc code=start
class Solution
{
public:
    void sortColors(vector<int> &nums)
    {
        // bucket sort variant
        // count each num
        // overwrite nums with counters
        // O(n) time O(k) space
        int zeroCount = 0;
        int oneCount = 0;
        for (int i = 0; i < nums.size(); i++)
        {
            switch (nums[i])
            {
            case 0:
                zeroCount++;
                break;
            case 1:
                oneCount++;
                break;
            }
        }
        for (int i = 0; i < nums.size(); i++)
        {
            if (zeroCount > 0)
            {
                nums[i] = 0;
                zeroCount--;
            }
            else if (oneCount > 0)
            {
                nums[i] = 1;
                oneCount--;
            }
            else
            {
                nums[i] = 2;
            }
        }
    }
};
// @lc code=end
