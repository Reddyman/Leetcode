/*
 * @lc app=leetcode id=4 lang=cpp
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
class Solution
{
public:
    double findMedianSortedArrays(vector<int> &nums1, vector<int> &nums2)
    {
        // concat arrays and sort
        // O((n+m)log(n+m)) time O((n+m)) space
        // nums1.insert(nums1.end(), nums2.begin(), nums2.end());
        // sort(nums1.begin(), nums1.end());
        // // even or odd
        // int size = nums1.size();
        // if (size % 2 != 0)
        //     // odd
        //     return nums1[size / 2];
        // else
        //     // even
        //     return ((nums1[size / 2] + nums1[size / 2 - 1]) / 2.0);

        // iterate pointers on both vectors
        // merge together in a single pass
        // O((n+m)) time O((n+m)) space
        // vector<int> sortedVect;
        // auto indexA = 0;
        // auto indexB = 0;
        // while (indexA < nums1.size() || indexB < nums2.size())
        // {
        //     if (indexA >= nums1.size())
        //     {
        //         sortedVect.push_back(nums2[indexB]);
        //         indexB++;
        //     }
        //     else if (indexB >= nums2.size())
        //     {
        //         sortedVect.push_back(nums1[indexA]);
        //         indexA++;
        //     }
        //     else if (nums1[indexA] < nums2[indexB])
        //     {
        //         sortedVect.push_back(nums1[indexA]);
        //         indexA++;
        //     }
        //     else
        //     {
        //         sortedVect.push_back(nums2[indexB]);
        //         indexB++;
        //     }
        // }
        // int size = sortedVect.size();
        // if (size % 2 != 0)
        //     // odd
        //     return sortedVect[size / 2];
        // else
        //     // even
        //     return ((sortedVect[size / 2] + sortedVect[size / 2 - 1]) / 2.0);

        // binary search algorithm
        // compare midpoints of each
        // O(log(n+m)) time O(k) space
        double ans;
        ans = median(nums1, nums2);
        return ans;
    }
    double median(vector<int> &a, vector<int> &b)
    {
        int m = a.size();
        int n = b.size();
        if (m > n)
            return median(b, a);
        int l = 0, r = m;
        while (l <= r)
        {
            int partx = l + (r - l) / 2;
            int party = (m + n + 1) / 2 - partx;
            int maxlx = (partx == 0) ? INT_MIN : a[partx - 1];
            int minrx = (partx == m) ? INT_MAX : a[partx];
            int maxly = (party == 0) ? INT_MIN : b[party - 1];
            int minry = (party == n) ? INT_MAX : b[party];
            if (maxlx <= minry && maxly <= minrx)
            {
                if ((m + n) % 2 == 0)
                    return (double)(max(maxlx, maxly) + min(minrx, minry)) / 2;
                else
                    return (double)(max(maxlx, maxly));
            }
            else if (maxlx > minry)
                r = partx - 1;
            else
                l = partx + 1;
        }
        return -1.0;
    }
};
// @lc code=end
