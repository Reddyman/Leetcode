/*
 * @lc app=leetcode id=117 lang=cpp
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

// @lc code=start
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/

class Solution
{
public:
    struct QueueVals
    {
        Node *root;
        int level;
    };
    Node *connect(Node *root)
    {
        // BFS traversal keeping track of all nodes at every level
        // Iterate over nodes, build linked lists
        // O(n) time O(n) space
        if (!root)
            return root;
        queue<QueueVals> myQueue;
        myQueue.push(QueueVals{root, 0});
        vector<vector<Node *>> levelNodes;
        while (myQueue.size() > 0)
        {
            QueueVals vals = myQueue.front();
            myQueue.pop();
            Node *currNode = vals.root;
            int currLevel = vals.level;
            if (currLevel == levelNodes.size())
            {
                // create vector at index
                vector<Node *> newVect{currNode};
                levelNodes.push_back(vector<Node *>{currNode});
            }
            else
            {
                // push to vector at index
                levelNodes[currLevel].push_back(currNode);
            }

            if (currNode->left)
            {
                myQueue.push({currNode->left, currLevel + 1});
            }
            if (currNode->right)
            {
                myQueue.push({currNode->right, currLevel + 1});
            }
        }

        for (vector<Node *> nodes : levelNodes)
        {
            for (int i = 0; i < nodes.size() - 1; i++)
            {
                nodes[i]->next = nodes[i + 1];
            }
        }

        return root;
    }
};
// @lc code=end
