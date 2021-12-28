/*
 * @lc app=leetcode id=24 lang=cpp
 *
 * [24] Swap Nodes in Pairs
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
    ListNode *swapPairs(ListNode *head)
    {
        // iterate from head to tail
        // swap values from curr node and next node
        // O(n) time O(k) space
        ListNode *headPtr = head;
        while (head)
        {
            ListNode *nextNode = head->next;
            if (nextNode)
            {
                int tmp = head->val;
                head->val = nextNode->val;
                nextNode->val = tmp;
                head = nextNode->next;
            }
            else
            {
                break;
            }
        }
        return headPtr;
    }
};
// @lc code=end
