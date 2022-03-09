/*
 * @lc app=leetcode id=1 lang=csharp
 *
 * [1] Two Sum
 */

// @lc code=start
public class Solution
{
  public int[] TwoSum(int[] nums, int target)
  {
    var res = new int[2];
    var numMap = new Dictionary<int, int>();
    for (int i = 0; i < nums.Length; i++)
    {
      if (numMap.TryGetValue(nums[i], out int val))
      {
        res[0] = val;
        res[1] = i;
        break;
      }
      numMap[target - nums[i]] = i;
    }
    return res;
  }
}
// @lc code=end

