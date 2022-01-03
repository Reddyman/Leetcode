/*
 * @lc app=leetcode id=171 lang=cpp
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
class Solution
{
public:
    int titleToNumber(string columnTitle)
    {
        // from right to left
        // base 26 to base 10 conversion
        // NOTE: 1-26 not 0-26
        // O(n) time O(k) space
        int index = columnTitle.size() - 1;
        int place = 0;
        int ansNum = 0;
        while (index >= 0)
        {
            int partNum = (columnTitle[index] - 65 + 1) % 27;
            ansNum += pow(26, place) * partNum;
            index--;
            place++;
        }

        return ansNum;
    }
};
// @lc code=end
