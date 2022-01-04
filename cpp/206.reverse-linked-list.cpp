/*
 * @lc app=leetcode id=206 lang=cpp
 *
 * [206] Reverse Linked List
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
    ListNode *reverseList(ListNode *head)
    {
        // iterate over linked list
        // push all vals into stack
        // iterate over linked list again, popping
        // and replacing vals from stack
        // O(n) time O(n) space
        // stack<int> stacker;
        // ListNode *currNode = head;
        // while (currNode)
        // {
        //     stacker.push(currNode->val);
        //     currNode = currNode->next;
        // }
        // currNode = head;
        // while (currNode)
        // {
        //     currNode->val = stacker.top();
        //     stacker.pop();
        //     currNode = currNode->next;
        // }
        // return head;

        // build reversed linked list while traversing
        // O(n) time O(k) space
        ListNode *nextNode = {};
        ListNode *prevNode = {};
        while (head)
        {
            nextNode = head->next;
            head->next = prevNode;
            prevNode = head;
            head = nextNode;
        }
        return prevNode;
    }
};
// @lc code=end
