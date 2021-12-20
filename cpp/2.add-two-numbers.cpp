/*
 * @lc app=leetcode id=2 lang=cpp
 *
 * [2] Add Two Numbers
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
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
    {
        // iterate with two pointers
        // add and store carry
        // O(n) time O(k) space
        int sum;
        int carry = 0;
        ListNode *head = new ListNode();
        ListNode *currNode = new ListNode();
        head->next = currNode;
        while (l1 || l2 || carry)
        {
            int firstVal = 0;
            int secondVal = 0;
            if (l1)
            {
                firstVal += l1->val;
                l1 = l1->next;
            }
            if (l2)
            {
                secondVal += l2->val;
                l2 = l2->next;
            }
            sum = firstVal + secondVal + carry;
            ListNode *newNode = new ListNode(sum % 10);
            carry = sum / 10;
            currNode->next = newNode;
            currNode = newNode;
        }
        return head->next->next;
    }
};
// @lc code=end
