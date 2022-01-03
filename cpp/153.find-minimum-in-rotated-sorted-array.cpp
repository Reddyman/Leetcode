/*
 * @lc app=leetcode id=153 lang=cpp
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
class Solution
{
public:
    int findMin(vector<int> &nums)
    {
        // brute force approach
        // iterate over nums, find min
        // O(n) time O(k) space
        // binary search approach
        // with two pointers
        // if midpoint is greater than indexH
        // than search mid-indexH
        // else serach indexL-mid
        // O(log(n)) time O(k) space
        int indexL = 0;
        int indexH = nums.size() - 1;
        int midPoint;
        while (indexL < indexH)
        {
            midPoint = (indexH + indexL) / 2;
            if (nums[midPoint] > nums[indexH])
            {
                indexL = midPoint + 1;
            }
            else
            {
                indexH = midPoint;
            }
        }
        return nums[indexL];
    }
};
// @lc code=end
