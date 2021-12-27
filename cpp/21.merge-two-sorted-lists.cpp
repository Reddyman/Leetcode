/*
 * @lc app=leetcode id=21 lang=cpp
 *
 * [21] Merge Two Sorted Lists
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
    ListNode *mergeTwoLists(ListNode *list1, ListNode *list2)
    {
        // iterate through both lists together
        // add smaller value to new linked list
        // O(max(n, m)) time O(n+m) space
        ListNode *head = new ListNode();
        ListNode *currNode = new ListNode();
        head->next = currNode;
        while (list1 || list2)
        {
            if (!list1 || (list2 && list1->val > list2->val))
            {
                ListNode *newNode = new ListNode(list2->val);
                currNode->next = newNode;
                currNode = currNode->next;
                list2 = list2->next;
            }
            else if (!list2 || (list1 && list2->val >= list1->val))
            {
                ListNode *newNode = new ListNode(list1->val);
                currNode->next = newNode;
                currNode = currNode->next;
                list1 = list1->next;
            }
        }
        return head->next->next;
    }
};
// @lc code=end
