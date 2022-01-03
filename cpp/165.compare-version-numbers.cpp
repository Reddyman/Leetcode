/*
 * @lc app=leetcode id=165 lang=cpp
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
class Solution
{
public:
    int compareVersion(string version1, string version2)
    {
        // iterate over both versions from every '.'
        // build substrings to compare against
        // O(n) time O(n) space
        int indexOne = 0;
        int indexTwo = 0;
        while (indexOne < version1.size() || indexTwo < version2.size())
        {
            string sOne = "", sTwo = "";
            // build substring one for curr most significant version number
            while (indexOne < version1.size() && version1[indexOne] != '.')
            {
                if (sOne.size() == 0 && version1[indexOne] == '0')
                {
                    indexOne++;
                    continue;
                }
                sOne += version1[indexOne];
                indexOne++;
            }
            // build substring one for curr most significant version number
            while (indexTwo < version2.size() && version2[indexTwo] != '.')
            {
                if (sTwo.size() == 0 && version2[indexTwo] == '0')
                {
                    indexTwo++;
                    continue;
                }
                sTwo += version2[indexTwo];
                indexTwo++;
            }

            // compare substrings
            int vNumOne = atoi(sOne.c_str());
            int vNumTwo = atoi(sTwo.c_str());
            if (vNumOne > vNumTwo)
                return 1;
            if (vNumTwo > vNumOne)
                return -1;

            indexOne++;
            indexTwo++;
        }
        return 0;
    }
};
// @lc code=end
