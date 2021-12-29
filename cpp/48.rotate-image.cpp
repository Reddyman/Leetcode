/*
 * @lc app=leetcode id=48 lang=cpp
 *
 * [48] Rotate Image
 */

// @lc code=start
class Solution
{
public:
    void rotate(vector<vector<int>> &matrix)
    {
        int left = 0, right = matrix.size() - 1;
        while (left < right)
        {
            for (int i = 0; i < (right - left); i++)
            {
                int top = left, bottom = right;

                // save the top left
                int topleft = matrix[top][left + i];

                // move bottom left into the top left
                matrix[top][left + i] = matrix[bottom - i][left];

                // move bottom right into the bottom left
                matrix[bottom - i][left] = matrix[bottom][right - i];

                // move top right into bottom right
                matrix[bottom][right - i] = matrix[top + i][right];

                // move top left into the top right
                matrix[top + i][right] = topleft;
            }
            left++;
            right--;
        }
    }
};
// @lc code=end
