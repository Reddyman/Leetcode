/*
 * @lc app=leetcode id=23 lang=cpp
 *
 * [23] Merge k Sorted Lists
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
    ListNode *mergeKLists(vector<ListNode *> &lists)
    {
        // iterate over every linked list
        // select the smallest int
        // move position in that linked list
        // O(n^2) time O(n) space
        ListNode *currNode = new ListNode{};
        ListNode *mergeHead = new ListNode{0, currNode};
        while (true)
        {
            int lowestNum = pow(10, 5);
            int lowestNumIndex = -1;
            for (int i = 0; i < lists.size(); i++)
            {
                if (lists[i] == nullptr)
                {
                    lists.erase(lists.begin() + i);
                    i--;
                    continue;
                }
                if (lists[i]->val <= lowestNum)
                {
                    lowestNum = lists[i]->val;
                    lowestNumIndex = i;
                }
            }
            // check if there were any non-null linked lists left
            if (lowestNumIndex > -1)
            {
                currNode->next = new ListNode(lowestNum);
                currNode = currNode->next;
                lists[lowestNumIndex] = lists[lowestNumIndex]->next;
            }
            else
            {
                break;
            }
        }
        return mergeHead->next->next;
    }
};
// @lc code=end
