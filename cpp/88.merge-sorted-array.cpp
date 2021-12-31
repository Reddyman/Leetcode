/*
 * @lc app=leetcode id=88 lang=cpp
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
class Solution
{
public:
    void merge(vector<int> &nums1, int m, vector<int> &nums2, int n)
    {
        // start from end of nums1
        // insert max of nums1 and nums2
        // O(n) time O(k) space
        int currPos = nums1.size() - 1;
        int indexOne = nums1.size() - nums2.size() - 1;
        int indexTwo = nums2.size() - 1;
        while (indexOne > -1 || indexTwo > -1)
        {
            if (indexOne == -1)
            {
                nums1[currPos] = nums2[indexTwo];
                currPos--;
                indexTwo--;
            }
            else if (indexTwo == -1)
            {
                nums1[currPos] = nums1[indexOne];
                currPos--;
                indexOne--;
            }
            else if (nums1[indexOne] >= nums2[indexTwo])
            {
                nums1[currPos] = nums1[indexOne];
                currPos--;
                indexOne--;
            }
            else
            {
                nums1[currPos] = nums2[indexTwo];
                currPos--;
                indexTwo--;
            }
        }
    }
};
// @lc code=end
