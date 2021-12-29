/*
 * @lc app=leetcode id=54 lang=cpp
 *
 * [54] Spiral Matrix
 */

// @lc code=start
class Solution
{
public:
    vector<int> spiralOrder(vector<vector<int>> &matrix)
    {
        int top = 0, left = 0;
        int bottom = matrix.size(), right = matrix[0].size();
        vector<int> results;

        while (top < bottom && left < right)
        {
            // top left to top right
            for (int col = left; col < right; col++)
            {
                results.push_back(matrix[top][col]);
            }
            top++;
            // right top to down right
            for (int row = top; row < bottom; row++)
            {
                results.push_back(matrix[row][right - 1]);
            }
            right--;
            // check for edge cases
            if (!(left < right && top < bottom))
                break;
            // right bottom to left bottom
            for (int col = right - 1; col > left - 1; col--)
            {
                results.push_back(matrix[bottom - 1][col]);
            }
            bottom--;
            // left bottom to left top
            for (int row = bottom - 1; row > top - 1; row--)
            {
                results.push_back(matrix[row][left]);
            }
            left++;
        }
        return results;
    }
};
// @lc code=end
