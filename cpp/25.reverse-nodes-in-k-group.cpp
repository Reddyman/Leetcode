/*
 * @lc app=leetcode id=25 lang=cpp
 *
 * [25] Reverse Nodes in k-Group
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution
{
public:
    ListNode *reverseKGroup(ListNode *head, int k)
    {
        // iterate k elements in linked list
        // store elements in stack
        // pop stack and replace values
        // O(n) time O(k) space
        ListNode *headPtr = head;
        while (head)
        {
            stack<int> stacker;
            ListNode *currNode = head;
            for (int i = 0; i < k; i++)
            {
                if (!currNode)
                {
                    return headPtr;
                }
                stacker.push(currNode->val);
                currNode = currNode->next;
            }
            while (!stacker.empty())
            {
                head->val = stacker.top();
                stacker.pop();
                head = head->next;
            }
        }
        return headPtr;
    }
};
// @lc code=end
