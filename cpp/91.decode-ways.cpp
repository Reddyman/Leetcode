/*
 * @lc app=leetcode id=91 lang=cpp
 *
 * [91] Decode Ways
 */

// @lc code=start
class Solution
{
public:
    unordered_map<string, int> dpCache;
    int numOfWays(string rem)
    {
        // base cases
        if (rem.size() == 0)
        {
            return 1;
        }
        // cache lookup
        if (dpCache.count(rem) > 0)
        {
            return dpCache[rem];
        }
        // recursive subcalls
        int ways = 0;
        string takeOne = rem.substr(0, 1);
        if (takeOne != "0")
        {
            // take one
            ways += numOfWays(rem.substr(1, rem.size()));
            // take two
            if (rem.size() > 1)
            {
                string takeTwo = rem.substr(0, 2);
                if (takeTwo <= "26")
                {
                    ways += numOfWays(rem.substr(2, rem.size()));
                }
            }
        }
        // store in cache
        dpCache[rem] = ways;
        return ways;
    }
    int numDecodings(string s)
    {
        // DFS recursive approach
        // choose to take one or two chars
        // at every recursive subcall
        // base cases
        // 1. Leading zero
        // 2. Out of range (>26)
        // 3. No more remaining nums
        // O(n^2) time O(n^2) space
        return numOfWays(s);
    }
};
// @lc code=end
