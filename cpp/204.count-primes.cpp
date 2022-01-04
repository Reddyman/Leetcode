/*
 * @lc app=leetcode id=204 lang=cpp
 *
 * [204] Count Primes
 */

// @lc code=start
class Solution
{
public:
    // unordered_set<int> primesCache;
    // bool isPrime(int num)
    // {
    //     // check primes cache first
    //     for (int prime : primesCache)
    //     {
    //         if (num % prime == 0)
    //         {
    //             return false;
    //         }
    //     }
    //     // exhaustively check from 2-sqrt(num)
    //     for (int i = 2; i < pow(num, .5) + 1; i++)
    //     {
    //         if (num % i == 0)
    //         {
    //             return false;
    //         }
    //     }
    //     primesCache.insert(num);
    //     return true;
    // }
    int countPrimes(int n)
    {
        // brute force
        // iterate from [2, n), counting all primes
        // create helper function for isPrime
        // cache primes for speed up
        // O(n^2) time O(k) space
        // int primesCounter = 1;
        // primesCache.insert(2);
        // for (int i = 2; i < n; i++)
        // {
        //     if (isPrime(i))
        //         primesCounter++;
        // }
        // return primesCounter;

        // sieve of eratosthenes approach
        // O(n^2) time O(n) space
        vector<bool> sieve(n);
        fill(sieve.begin(), sieve.end(), false);

        for (int i = 2; i < n; i++)
        {
            // unchecked/prime
            if (!sieve[i])
            {
                // mark every next multiple of i
                int j = i + i;
                while (j < n)
                {
                    sieve[j] = true;
                    j += i;
                }
            }
        }
        // count false/prime values
        int primesCount = 0;
        for (int i = 2; i < n; i++)
        {
            if (!sieve[i])
                primesCount++;
        }
        return primesCount;
    }
};
// @lc code=end
