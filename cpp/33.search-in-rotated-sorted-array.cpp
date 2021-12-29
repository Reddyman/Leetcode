/*
 * @lc app=leetcode id=33 lang=cpp
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
class Solution
{
public:
    int search(vector<int> &nums, int target)
    {
        // brute force approach
        // iterate over array to find target num
        // O(n) time O(k) space
        // binary search approach
        // apply binary search to find rotation
        // rotation is index of lowest num
        // then use rotation distance to do
        // a second binary search
        // O(log(n)) time O(k) space

        // binary search to find lowest val (rot distance)
        int pLow = 0;
        int pHigh = nums.size() - 1;
        int midPoint;
        while (pLow < pHigh)
        {
            midPoint = (pHigh + pLow) / 2;
            if (nums[midPoint] > nums[pHigh])
            {
                pLow = midPoint + 1;
            }
            else
            {
                pHigh = midPoint;
            }
        }

        // binary search adjusted w/ rot distance
        int rotDist = pLow;
        pLow = 0;
        pHigh = nums.size() - 1;
        while (pLow <= pHigh)
        {
            midPoint = (pHigh + pLow) / 2;
            // adjust with rotDist
            int rotMidPoint = (midPoint + rotDist) % nums.size();
            // found target!
            if (nums[rotMidPoint] == target)
            {
                return rotMidPoint;
            }
            if (nums[rotMidPoint] < target)
            {
                pLow = midPoint + 1;
            }
            else
            {
                pHigh = midPoint - 1;
            }
        }
        // not found
        return -1;
    }
};
// @lc code=end
