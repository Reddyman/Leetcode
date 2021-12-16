/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // NOTE: Revisit when wiser
  // for convenience, we want the first arr to be smaller
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1)
  }
  let n = nums1.length
  let m = nums2.length

  let low = 0
  let high = n
  while (low <= high) {
    let partitionN = Math.floor((low + high) / 2)
    let partitionM = Math.floor(((n + m + 1) / 2) - partitionN)

    // if partitionN is 0 it means nothing is there on the left side. Use -INF for maxLeftN
    // if paritionM is length of input then there is nothing on right side. Use +INF for minRightN
    let maxLeftN = partitionN === 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionN - 1]
    let minRightN = partitionN === n ? Number.MAX_SAFE_INTEGER : nums1[partitionN]

    let maxLeftM = partitionM === 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionM - 1]
    let minRightM = partitionM === m ? Number.MAX_SAFE_INTEGER : nums2[partitionM]

    if (maxLeftN <= minRightM && maxLeftM <= minRightN) {
      // We have partitioned at the correct place
      // Now get max of left elements and min of right elements to get the median in case of even length combined array size
      // Or get max of left for odd length combined array size
      if ((n + m) % 2 === 0) {
        return (Math.max(maxLeftN, maxLeftM) + Math.min(minRightN, minRightM)) / 2
      } else {
        return Math.max(maxLeftN, maxLeftM)
      }
    } else if (maxLeftN > maxLeftM) {
      // We are too far on the right side for partitionM
      // Go to left side
      high = partitionN - 1
    } else {
      low = partitionN + 1
    }
  }
};
// @lc code=end

