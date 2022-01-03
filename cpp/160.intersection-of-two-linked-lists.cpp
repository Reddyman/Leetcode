/*
 * @lc app=leetcode id=160 lang=cpp
 *
 * [160] Intersection of Two Linked Lists
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
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB)
    {
        // set approach
        // store all traversed pointers of A and B within a set
        // if there is an intersection, return
        // O(n) time O(n) space
        // replay approach
        // iterate pointers of both linked lists
        // check if they end up in the same place
        // iterate again with the pointers to find intersect
        // O(n) time O(k) space
        ListNode *currA = headA;
        ListNode *currB = headB;
        int counterA = 0;
        int counterB = 0;
        while (currA->next || currB->next)
        {
            if (currA == currB)
            {
                break;
            }
            if (currA->next)
            {
                counterA++;
                currA = currA->next;
            }
            if (currB->next)
            {
                counterB++;
                currB = currB->next;
            }
        }
        if (currA != currB)
            return nullptr;
        currA = headA;
        currB = headB;
        while (currA != currB)
        {
            if (counterA == counterB)
            {
                currA = currA->next;
                counterA--;
                currB = currB->next;
                counterB--;
            }
            else if (counterA > counterB)
            {
                currA = currA->next;
                counterA--;
            }
            else
            {
                currB = currB->next;
                counterB--;
            }
        }
        return currA;
    }
};
// @lc code=end
