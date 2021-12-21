/*
 * @lc app=leetcode id=20 lang=cpp
 *
 * [20] Valid Parentheses
 */

// @lc code=start
class Solution
{
public:
    bool isValid(string s)
    {
        stack<char> stacker;
        for (char &c : s)
        {
            switch (c)
            {
            case '(':
            case '[':
            case '{':
                stacker.push(c);
                break;
            case ')':
                if (stacker.empty())
                {
                    return false;
                }
                if (stacker.top() == '(')
                {
                    stacker.pop();
                }
                else
                {
                    stacker.push(c);
                }
                break;
            case ']':
                if (stacker.empty())
                {
                    return false;
                }
                if (stacker.top() == '[')
                {
                    stacker.pop();
                }
                else
                {
                    stacker.push(c);
                }
                break;
            case '}':
                if (stacker.empty())
                {
                    return false;
                }
                if (stacker.top() == '{')
                {
                    stacker.pop();
                }
                else
                {
                    stacker.push(c);
                }
                break;
            }
        }
        return stacker.empty();
    }
};
// @lc code=end
