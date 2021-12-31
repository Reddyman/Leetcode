/*
 * @lc app=leetcode id=79 lang=cpp
 *
 * [79] Word Search
 */

// @lc code=start
class Solution
{
public:
    bool dfsHelper(vector<vector<char>> &board, int row, int col, string &word, int pos)
    {
        // base cases
        if (pos >= word.size())
        {
            return true;
        }
        // bounds checks
        if (row >= board.size() || row < 0)
        {
            return false;
        }
        if (col >= board[0].size() || col < 0)
        {
            return false;
        }
        // check if board index matches char at wordPos
        if (board[row][col] != word[pos])
        {
            return false;
        }
        // mark positions on board to prevent backtracks
        char ch = board[row][col];
        board[row][col] = '*';

        // recursive subcalls
        int up = row + 1;
        int down = row - 1;
        int left = col - 1;
        int right = col + 1;

        pos++;
        // keep moving up, down, left, right
        bool res = (dfsHelper(board, up, col, word, pos) ||
                    dfsHelper(board, down, col, word, pos) ||
                    dfsHelper(board, row, left, word, pos) ||
                    dfsHelper(board, row, right, word, pos));

        // unmark board positions
        board[row][col] = ch;

        return res;
    }
    bool exist(vector<vector<char>> &board, string word)
    {
        // DFS recursive approach
        // iterate over every board position
        // launch DFS with word, moving up/down or left/right
        // O((n*m)^(n*m)) time O((n*m)^(n*m)) space
        for (int i = 0; i < board.size(); i++)
        {
            for (int j = 0; j < board[0].size(); j++)
            {
                if (dfsHelper(board, i, j, word, 0))
                {
                    return true;
                }
            }
        }
        return false;
    }
};
// @lc code=end
