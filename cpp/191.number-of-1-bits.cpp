/*
 * @lc app=leetcode id=191 lang=cpp
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
class Solution
{
public:
    int hammingWeight(uint32_t n)
    {
        // use binary & against least->most significant bit
        // O(n) time O(k) space
        int currPlace = 0;
        long powOfTwo = pow(2, currPlace);
        int bitCounter = 0;
        while (powOfTwo <= n)
        {
            if ((powOfTwo & n) == powOfTwo)
            {
                bitCounter++;
            }
            currPlace++;
            powOfTwo = pow(2, currPlace);
        }
        return bitCounter;
    }
};
// @lc code=end
