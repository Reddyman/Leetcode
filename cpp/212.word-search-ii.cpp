/*
 * @lc app=leetcode id=212 lang=cpp
 *
 * [212] Word Search II
 */

// @lc code=start
class Solution
{
public:
    struct Node
    {
        unordered_map<char, Node *> charMap;
        bool isWord;
        string word;
    };
    struct Trie
    {
        Node *root;

        Trie()
        {
            root = new Node{};
        }

        void insert(string word)
        {
            Node *currNode = root;
            for (char ch : word)
            {
                if (currNode->charMap.count(ch) > 0)
                {
                    // traverse
                    currNode = currNode->charMap[ch];
                }
                else
                {
                    // insert
                    currNode->charMap[ch] = new Node{};
                    currNode = currNode->charMap[ch];
                }
            }
            currNode->isWord = true;
            currNode->word = word;
        };

        Node *traverse(Node *start, char nextChar)
        {
            // returns next traversal or nullptr if not found
            if (start->charMap.count(nextChar) > 0)
            {
                return start->charMap[nextChar];
            }
            return nullptr;
        };
    };

    vector<string> foundWords;
    int numOfWords;

    void wordFinder(vector<vector<char>> &board, Trie &trie, vector<Node *> &currTraversals, int row, int col)
    {
        // check bounds
        if (row > board.size() - 1 || row < 0 || col > board[0].size() - 1 || col < 0 || foundWords.size() == numOfWords)
        {
            return;
        }
        // check traversals
        vector<Node *> newTraversals;
        for (Node *currTraversal : currTraversals)
        {
            Node *lastNode = trie.traverse(currTraversal, board[row][col]);
            if (lastNode)
            {
                if (lastNode->isWord)
                {
                    foundWords.push_back(lastNode->word);
                    // dangerous mutation to speed up execution
                    lastNode->isWord = false;
                }
                newTraversals.push_back(lastNode);
            }
        }
        if (newTraversals.size() == 0)
        {
            return;
        }
        // continue traversal
        // mark position on board
        char prevChar = board[row][col];
        board[row][col] = '*';
        // recursive subcalls
        wordFinder(board, trie, newTraversals, row - 1, col);
        wordFinder(board, trie, newTraversals, row + 1, col);
        wordFinder(board, trie, newTraversals, row, col - 1);
        wordFinder(board, trie, newTraversals, row, col + 1);
        board[row][col] = prevChar;
    }
    vector<string> findWords(vector<vector<char>> &board, vector<string> &words)
    {
        // brute force approach
        // check every pos on board
        // if char contained within first char of words
        // launch a DFS, comparing each adjacent pos
        // with words in word list
        // O((n*m)*(averageNumOfCharsInWordsList*numOfWords)) time O(k) space
        // trie-approach
        // use a trie to speed up word matches
        // O((n*m)*(maxNumOfChars)) time O(numOfCharsAtUniquePos) space
        //
        Trie newTrie{};
        for (string word : words)
        {
            newTrie.insert(word);
        }
        // to improve execution speed
        numOfWords = words.size();

        vector<Node *> currTraversals{newTrie.root};
        for (int row = 0; row < board.size(); row++)
        {
            for (int col = 0; col < board[0].size(); col++)
            {
                // launch DFS
                wordFinder(board, newTrie, currTraversals, row, col);
            }
        }

        return foundWords;
    }
};
// @lc code=end
