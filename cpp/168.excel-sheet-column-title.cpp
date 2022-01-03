/*
 * @lc app=leetcode id=168 lang=cpp
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
class Solution
{
public:
    string convertToTitle(int columnNumber)
    {
        // long division with remainder
        // 1-26 -> A-Z
        // O(n) time O(n) space
        string s = "";
        // for the offset of 1
        columnNumber--;
        while (columnNumber >= 0)
        {
            s += ('A' + columnNumber % 26);
            columnNumber /= 26;
            columnNumber--;
        }
        reverse(s.begin(), s.end());
        return s;
    }
};
// @lc code=end
