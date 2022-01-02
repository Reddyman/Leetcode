/*
 * @lc app=leetcode id=121 lang=cpp
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
class Solution
{
public:
    int maxProfit(vector<int> &prices)
    {
        // brute force approach
        // at every index, scan rest of vector
        // to find max profit point
        // O(n^2) time O(k) space
        // greedy approach
        // iterate over vector
        // keep track of curr min and max profit
        // O(n) time O(k) space
        int maxProfit = 0;
        if (prices.size() < 2)
            return maxProfit;
        int minPrice = prices[0];
        for (int i = 1; i < prices.size(); i++)
        {
            maxProfit = max(maxProfit, prices[i] - minPrice);
            minPrice = min(minPrice, prices[i]);
        }
        return maxProfit;
    }
};
// @lc code=end
