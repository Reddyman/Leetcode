/*
 * @lc app=leetcode id=189 lang=cpp
 *
 * [189] Rotate Array
 */

// @lc code=start
class Solution
{
public:
    void rotate(vector<int> &nums, int k)
    {
        // iterate over nums
        // add k to index, modulo by nums size
        // store in new array, replace existing array
        // O(n) time O(n) space
        // int rotArr[nums.size()];
        // for (int i = 0; i < nums.size(); i++)
        // {
        //     int newIndex = (i + k) % nums.size();
        //     rotArr[newIndex] = nums[i];
        // }
        // for (int i = 0; i < nums.size(); i++)
        // {
        //     nums[i] = rotArr[i];
        // }
        // return;

        // reverse entire array
        // then reverse first k numbers
        // then reverse remaining numbers
        // O(n) time O(k) space
        k = k % nums.size();
        reverse(nums.begin(), nums.end());
        reverse(nums.begin(), nums.begin() + k);
        reverse(nums.begin() + k, nums.end());
        return;
    }
};
// @lc code=end
