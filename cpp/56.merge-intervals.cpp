/*
 * @lc app=leetcode id=56 lang=cpp
 *
 * [56] Merge Intervals
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> merge(vector<vector<int>> &intervals)
    {
        // for each interval if the prev interval is intersecting
        // the curr interval, then merge
        // O(nlog(n) + n) time O(n) space
        sort(intervals.begin(), intervals.end(), [](vector<int> const &a, vector<int> const &b)
             { return a[0] < b[0]; });
        vector<vector<int>> mergeIntervals;
        mergeIntervals.push_back(intervals[0]);
        for (int i = 0; i < intervals.size(); i++)
        {
            if (mergeIntervals.back()[1] >= intervals[i][0])
            {
                mergeIntervals.back()[1] = max(mergeIntervals.back()[1], intervals[i][1]);
            }
            else
            {
                mergeIntervals.push_back(intervals[i]);
            }
        }
        return mergeIntervals;
    }
};
// @lc code=end
