/*
 * @lc app=leetcode id=5 lang=cpp
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
#include <sstream>
class Solution
{
public:
    string longestPalindrome(string s)
    {
        // brute force approach
        // check every combination of palindromes
        // at every index
        // O(n^3) time
        // sliding window approach
        // start with largest possible paldindrome size
        // 'slide' and check at every index
        // O(n^3) time
        int currSize = s.size();
        int currIndex = 0;
        while (currSize > 1)
        {
            if ((currIndex + currSize) > s.size())
            {
                // out of bounds, reset with smaller window
                currSize--;
                currIndex = 0;
            }
            else
            {
                // check at current window
                int pLow = currIndex;
                int pHigh = currIndex + (currSize - 1);
                if (checkIfPalindrome(pLow, pHigh, s))
                {
                    stringstream res;
                    for (int i = currIndex; i <= pHigh; i++)
                    {
                        res << s[i];
                    }
                    return res.str();
                }
                else
                {
                    currIndex++;
                }
            }
        }

        return s.substr(0, 1);
    }
    bool checkIfPalindrome(int indexL, int indexH, string &s)
    {
        while (indexH > indexL)
        {
            if (s[indexH] != s[indexL])
            {
                return false;
            }
            indexH--;
            indexL++;
        }
        return true;
    }
};
// @lc code=end
