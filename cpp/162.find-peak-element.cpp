/*
 * @lc app=leetcode id=162 lang=cpp
 *
 * [162] Find Peak Element
 */

// @lc code=start
class Solution
{
public:
    int findPeakElement(vector<int> &nums)
    {
        // revisit when wiser, this is wild
        // O(log(n)) time O(k) space
        int indexL = 0;
        int indexH = nums.size() - 1;
        while (indexL < indexH)
        {
            int midPoint = (indexH + indexL) / 2;
            int midPoint2 = midPoint + 1;
            if (nums[midPoint] < nums[midPoint2])
            {
                indexL = midPoint2;
            }
            else
            {
                indexH = midPoint;
            }
        }
        return indexL;
    }
};
// @lc code=end
