/*
 * @lc app=leetcode id=141 lang=cpp
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution
{
public:
    bool hasCycle(ListNode *head)
    {
        // set approach
        // store pointers in set
        // return true if pointer repeated twice
        // O(n) time O(n) space
        // turtoise hare approach
        // iterate two pointers, one fast, one slow
        // return true if they intersect
        // O(n) time O(k) space
        ListNode *pOne = head;
        ListNode *pTwo = head;
        int iterCount = 0;
        while (pOne && pTwo)
        {
            if ((iterCount > 0) && pOne == pTwo)
            {
                return true;
            }
            if (iterCount % 2 == 1)
            {
                pTwo = pTwo->next;
            }
            pOne = pOne->next;
            iterCount++;
        }
        return false;
    }
};
// @lc code=end
