/*
 * @lc app=leetcode id=138 lang=cpp
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution
{
public:
    Node *copyRandomList(Node *head)
    {
        // construct a hashmap of nodes, then build deep copy
        // O(n) time O(n) space
        if (!head)
            return head;
        unordered_map<Node *, Node *> nodeMap;
        Node *currNode = head;
        // create hashmap of nodes
        while (currNode)
        {
            nodeMap[currNode] = new Node{currNode->val};
            currNode = currNode->next;
        }
        // build deep copy with pointers
        currNode = head;
        while (currNode)
        {
            nodeMap[currNode]->next = nodeMap[currNode->next];
            nodeMap[currNode]->random = nodeMap[currNode->random];
            currNode = currNode->next;
        }
        return nodeMap[head];
    }
};
// @lc code=end
