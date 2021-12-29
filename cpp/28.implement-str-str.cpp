/*
 * @lc app=leetcode id=28 lang=cpp
 *
 * [28] Implement strStr()
 */

// @lc code=start
class Solution
{
public:
    int strStr(string haystack, string needle)
    {
        // sliding window
        // check at every index for a match
        // check at every subsequent index+n
        // O(n*m) time O(k) space
        if (haystack == needle)
            return 0;
        if (haystack.size() < needle.size())
            return -1;
        for (int i = 0; i <= haystack.size() - needle.size(); i++)
        {
            bool matchFound = true;
            for (int j = 0; j < needle.size(); j++)
            {
                if (haystack[i + j] != needle[j])
                {
                    matchFound = false;
                    break;
                }
            }
            if (matchFound)
            {
                return i;
            }
        }
        return -1;
    }
};
// @lc code=end
