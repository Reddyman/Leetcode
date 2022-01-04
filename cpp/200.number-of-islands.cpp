/*
 * @lc app=leetcode id=200 lang=cpp
 *
 * [200] Number of Islands
 */

// @lc code=start
class Solution
{
public:
    void dfsHelper(vector<vector<char>> &grid, int row, int col)
    {
        // base cases
        // out of bounds
        if ((row > grid.size() - 1) || row < 0)
        {
            return;
        }
        if ((col > grid[0].size() - 1) || col < 0)
        {
            return;
        }
        // mark current position
        grid[row][col] = 'X';
        // check adjacent positions for '1'
        int up = row - 1;
        int down = row + 1;
        int left = col - 1;
        int right = col + 1;
        // check up
        if (up > -1)
        {
            if (grid[up][col] == '1')
            {
                dfsHelper(grid, up, col);
            }
        }
        // check down
        if (down < grid.size())
        {
            if (grid[down][col] == '1')
            {
                dfsHelper(grid, down, col);
            }
        }
        // check left
        if (left > -1)
        {
            if (grid[row][left] == '1')
            {
                dfsHelper(grid, row, left);
            }
        }
        // check right
        if (right < grid[0].size())
        {
            if (grid[row][right] == '1')
            {
                dfsHelper(grid, row, right);
            }
        }
        return;
    }
    int numIslands(vector<vector<char>> &grid)
    {
        // iterate over entire grid
        // launch a DFS at every position
        // where there is a 1, and has not been visited
        // mark positions visited with '-1'
        // base cases
        // 1. No adjacent '1'
        // 2. reach edge of grid
        // O(m*n) time O(m*n) space
        int numOfIslands = 0;
        for (int row = 0; row < grid.size(); row++)
        {
            for (int col = 0; col < grid[0].size(); col++)
            {
                if (grid[row][col] == '1')
                {
                    // launch DFS to mark entire island
                    dfsHelper(grid, row, col);
                    numOfIslands++;
                }
            }
        }
        return numOfIslands;
    }
};
// @lc code=end
