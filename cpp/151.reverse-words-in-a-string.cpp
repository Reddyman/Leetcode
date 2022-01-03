/*
 * @lc app=leetcode id=151 lang=cpp
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
class Solution
{
public:
    string reverseWords(string s)
    {
        // push all words into stack
        // pop words from stack to rebuild
        // O(n) time O(n) space
        stack<string> stacker;
        string reverseStr;
        for (int i = 0; i < s.size(); i++)
        {
            if (isalnum(s[i]))
            {
                // iterate until next word
                int j = i;
                while (j < s.size() && isalnum(s[j]))
                {
                    if (s[j] == ' ')
                    {
                        cout << "what?" << endl;
                    }
                    j++;
                }
                stacker.push(s.substr(i, j - i));
                i = j;
            }
        }
        // reverse with stack
        while (stacker.size() > 0)
        {
            string word = stacker.top();
            stacker.pop();
            reverseStr += word;
            if (stacker.size() > 0)
            {
                reverseStr += " ";
            }
        }

        return reverseStr;
    }
};
// @lc code=end
