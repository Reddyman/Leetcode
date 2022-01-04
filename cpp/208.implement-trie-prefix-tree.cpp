/*
 * @lc app=leetcode id=208 lang=cpp
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
class Trie
{
public:
    struct Node
    {
        bool isWord;
        unordered_map<char, Node *> charMap;
    };

    Node *root;
    Trie()
    {
        root = new Node{};
    }

    void insert(string word)
    {
        Node *currNode = root;
        for (char c : word)
        {
            if (currNode->charMap.count(c) > 0)
            {
                // traverse
                currNode = currNode->charMap[c];
            }
            else
            {
                // insert
                currNode->charMap[c] = new Node{};
                currNode = currNode->charMap[c];
            }
        }
        currNode->isWord = true;
    }

    bool search(string word)
    {
        Node *currNode = root;
        for (char c : word)
        {
            if (currNode->charMap.count(c) > 0)
            {
                currNode = currNode->charMap[c];
            }
            else
            {
                return false;
            }
        }
        return currNode->isWord;
    }

    bool startsWith(string prefix)
    {
        Node *currNode = root;
        for (char c : prefix)
        {
            if (currNode->charMap.count(c) > 0)
            {
                currNode = currNode->charMap[c];
            }
            else
            {
                return false;
            }
        }
        return true;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */
// @lc code=end
