/*
 * @lc app=leetcode id=73 lang=cpp
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
class Solution
{
public:
    void setZeroes(vector<vector<int>> &matrix)
    {
        // iterate once keeping track of all zero positions
        // iterate over all zero positions, modifying matrix
        // O(n*m) time O(n*m) space
        vector<vector<int>> zeroPositions;
        for (int i = 0; i < matrix.size(); i++)
        {
            for (int j = 0; j < matrix[0].size(); j++)
            {
                if (matrix[i][j] == 0)
                {
                    zeroPositions.push_back({i, j});
                }
            }
        }
        for (vector<int> zeroPos : zeroPositions)
        {
            // zero-out row
            int row = zeroPos[0];
            for (int col = 0; col < matrix[row].size(); col++)
            {
                matrix[row][col] = 0;
            }
            // zero-out col
            int col = zeroPos[1];
            for (int row = 0; row < matrix.size(); row++)
            {
                matrix[row][col] = 0;
            }
        }
    }
};
// @lc code=end
