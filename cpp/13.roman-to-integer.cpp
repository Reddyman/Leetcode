/*
 * @lc app=leetcode id=13 lang=cpp
 *
 * [13] Roman to Integer
 */

// @lc code=start
#include <map>
class Solution
{
public:
    int romanToInt(string s)
    {
        unordered_map<char, int> mappings(
            {{'I', 1},
             {'V', 5},
             {'X', 10},
             {'L', 50},
             {'C', 100},
             {'D', 500},
             {'M', 1000}});
        int rSum = 0;
        int prev = mappings[s[0]];
        for (int i = 0; i < s.size(); i++)
        {
            int val = mappings[s[i]];
            if (val > prev)
            {
                // Subtract prev, then from curr, then add
                rSum += val + -2 * prev;
            }
            else
            {
                rSum += val;
            }
            prev = mappings[s[i]];
        }
        return rSum;
    }
};
// @lc code=end
