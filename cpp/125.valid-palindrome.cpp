/*
 * @lc app=leetcode id=125 lang=cpp
 *
 * [125] Valid Palindrome
 */

// @lc code=start
class Solution
{
public:
    bool isPalindrome(string s)
    {
        // iterate pointers left and right
        // skip non-alphanumerics
        // O(n) time O(k) space
        int indexLow = 0, indexHigh = s.size() - 1;
        while (indexLow < indexHigh)
        {
            if (!isalnum(s[indexLow]))
            {
                indexLow++;
            }
            else if (!isalnum(s[indexHigh]))
            {
                indexHigh--;
            }
            else if (tolower(s[indexLow]) != tolower(s[indexHigh]))
            {
                return false;
            }
            else
            {
                indexLow++;
                indexHigh--;
            }
        }
        return true;
    }
};
// @lc code=end
