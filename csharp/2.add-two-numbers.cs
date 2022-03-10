/*
 * @lc app=leetcode id=2 lang=csharp
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
  public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
  {
    var res = new ListNode();
    var curr = res;
    int carry = 0;
    while (l1 != null || l2 != null)
    {
      int val1 = 0;
      int val2 = 0;
      if (l2 == null)
      {
        val1 = l1.val;
      }
      else if (l1 == null)
      {
        val2 = l2.val;
      }
      else
      {
        val1 = l1.val;
        val2 = l2.val;
      }
      int sum = val1 + val2 + carry;
      carry = sum / 10;
      var newNode = new ListNode(sum % 10);
      curr.next = newNode;
      curr = curr.next;
      l1 = l1?.next;
      l2 = l2?.next;
    }
    if (carry > 0)
    {
      var newNode = new ListNode(carry);
      curr.next = newNode;
      curr = curr.next;
    }

    return res.next;
  }
}
// @lc code=end

