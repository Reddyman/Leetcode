/*
 * @lc app=leetcode id=116 lang=cpp
 *
 * [116] Populating Next Right Pointers in Each Node
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
        // BFS traversal
        // keep track of all nodes at every level
        // iterate over nodes to create linked list
        // O(n) time O(n) space
        if (!root)
            return root;

        queue<QueueVals> myQueue;
        myQueue.push(QueueVals{root, 0});
        vector<vector<Node *>> levelNodes;
        while (myQueue.size() > 0)
        {
            QueueVals vals = myQueue.front();
            Node *currNode = vals.root;
            int currLevel = vals.level;
            myQueue.pop();
            if (currLevel == levelNodes.size())
            {
                // create new vector
                vector<Node *> newVect{currNode};
                levelNodes.push_back(newVect);
            }
            else
            {
                // push values to existing vector
                levelNodes[currLevel].push_back(currNode);
            }

            if (currNode->left)
            {
                myQueue.push(QueueVals{currNode->left, currLevel + 1});
            }
            if (currNode->right)
            {
                myQueue.push(QueueVals{currNode->right, currLevel + 1});
            }
        }

        // build linked lists at every level
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
