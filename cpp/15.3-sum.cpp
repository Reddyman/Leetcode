/*
 * @lc app=leetcode id=15 lang=cpp
 *
 * [15] 3Sum
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> threeSum(vector<int> &nums)
    {
        // brute force approach
        // iterate over every 3 pair combination
        // O(n^3) time O(k) space
        // sorted approach
        // sort, then iterate once, shift indexes
        // high and low based on curr sum
        // O(nlog(n) + n^2) time O(k) space

        vector<vector<int>> resVect;

        if (nums.size() < 3)
            return resVect;

        // sort input
        sort(nums.begin(), nums.end());

        int i = 0;
        for (; i < nums.size(); i++)
        {
            int pLow = i + 1;
            int pHigh = nums.size() - 1;
            // eject early out of repeating digits
            if (i > 0 && nums[pLow] == nums[pHigh])
            {
                break;
            }
            while (pHigh > pLow)
            {
                int currSum = nums[i] + nums[pLow] + nums[pHigh];
                if (currSum == 0)
                {
                    vector<int> triplet{nums[i], nums[pLow], nums[pHigh]};
                    resVect.push_back(triplet);
                    // keep going!
                    pHigh--;
                }
                else if (currSum > 0)
                {
                    pHigh--;
                }
                else
                {
                    pLow++;
                }
            }
        }

        // c++ uniqueness in multidimensional vector magic
        sort(resVect.begin(), resVect.end());
        resVect.erase(unique(resVect.begin(), resVect.end()), resVect.end());

        return resVect;
    }
};
// @lc code=end
