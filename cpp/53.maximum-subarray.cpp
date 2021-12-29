/*
 * @lc app=leetcode id=53 lang=cpp
 *
 * [53] Maximum Subarray
 */

// @lc code=start
class Solution
{
public:
    int maxSubArray(vector<int> &nums)
    {
        // iteratively add each num
        // if curr sum < 0, discard prev nums
        // O(n) time O(k) space
        int maxSum = INT_MIN;
        int currSum = 0;
        for (int num : nums)
        {
            currSum += num;
            maxSum = max(maxSum, currSum);
            currSum = max(currSum, 0);
        }

        return maxSum;
    }
};
// @lc code=end
