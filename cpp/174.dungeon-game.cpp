/*
 * @lc app=leetcode id=174 lang=cpp
 *
 * [174] Dungeon Game
 */

// @lc code=start
class Solution
{
public:
    int calculateMinimumHP(vector<vector<int>> &dungeon)
    {
        // bottom-up DP approach
        // calculate minimum HP at every iteration
        // O(m*n) time O(m*n) space
        int m = dungeon.size(), n = dungeon[0].size();
        vector<vector<int>> dpDungeon;
        for (int i = 0; i < dungeon.size(); i++)
        {
            vector<int> newRow;
            for (int j = 0; j < dungeon[i].size(); j++)
            {
                newRow.push_back(INT_MAX);
            }
            dpDungeon.push_back(newRow);
        }

        for (int i = m - 1; i >= 0; i--)
        {
            for (int j = n - 1; j >= 0; j--)
            {
                if ((i == m - 1) && (j == n - 1))
                {
                    // bottom right cell (princess)
                    dpDungeon[i][j] = min(0, dungeon[i][j]);
                }
                else if (i == m - 1)
                {
                    // last row
                    dpDungeon[i][j] = min(0, dungeon[i][j] + dpDungeon[i][j + 1]);
                }
                else if (j == n - 1)
                {
                    // last col
                    dpDungeon[i][j] = min(0, dungeon[i][j] + dpDungeon[i + 1][j]);
                }
                else
                {
                    dpDungeon[i][j] = min(0, dungeon[i][j] + max(dpDungeon[i][j + 1], dpDungeon[i + 1][j]));
                }
            }
        }

        return abs(dpDungeon[0][0]) + 1;
    }
};
// @lc code=end
