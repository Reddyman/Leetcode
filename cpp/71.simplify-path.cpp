/*
 * @lc app=leetcode id=71 lang=cpp
 *
 * [71] Simplify Path
 */

// @lc code=start
class Solution
{
public:
    string simplifyPath(string path)
    {
        // push valid path parts into stack
        // pop and join all stack parts
        // O(n) time
        // O(n) space
        stack<string> stacker;
        if (path[path.size() - 1] != '/')
        {
            path += "/";
        }
        int i = 1;
        string ans = "";
        string temp = "";
        while (i < path.size())
        {
            if (path[i] == '/')
            {
                if (temp == "" || temp == ".")
                {
                    // ignore
                }
                else if (temp == "..")
                {
                    if (!stacker.empty())
                    {
                        stacker.pop();
                    }
                }
                else
                {
                    // push previous filepath
                    stacker.push(temp);
                }
                temp = "";
            }
            else
            {
                temp.push_back(path[i]);
            }
            i++;
        }

        while (!stacker.empty())
        {
            ans = "/" + stacker.top() + ans;
            stacker.pop();
        }

        if (ans.size() == 0)
        {
            ans = "/";
        }

        return ans;
    }
};
// @lc code=end
