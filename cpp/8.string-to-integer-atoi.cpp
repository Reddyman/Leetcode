/*
 * @lc app=leetcode id=8 lang=cpp
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
#include <ctype.h>

class Solution
{
public:
    int myAtoi(string s)
    {
        // iterate over every character
        // begin substr counter when numeric/+/-
        // convert to int and clamp value
        // O(n) time O(n) space

        const int len = s.size();

        if (len == 0)
        {
            return 0;
        }

        int index = 0;

        // skip white spaces
        while (index < len && s[index] == ' ')
        {
            index++;
        }

        // handle sign cases
        bool isNegative = false;

        if (index < len)
        {
            if (s[index] == '-')
            {
                isNegative = true;
                index++;
            }
            else if (s[index] == '+')
            {
                index++;
            }
        }

        int result = 0;

        // iterate until non-digit, or end of string
        while (index < len && isdigit(s[index]))
        {
            // ASCII hack to convert char digit into digit
            int digit = s[index] - '0';

            // clamp min/max range
            if (result > (INT_MAX / 10) || (result == (INT_MAX / 10) && digit > 7))
            {
                return isNegative ? INT_MIN : INT_MAX;
            }
            // shift digit place and add new digit
            result = (result * 10) + digit;
            ++index;
        }

        return isNegative ? -result : result;
    }
};
// @lc code=end
