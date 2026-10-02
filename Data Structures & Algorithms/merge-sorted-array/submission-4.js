class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let r = m + n - 1;
        let i = m - 1;
        let j = n - 1;

        while (r >= 0) {
            if (j < 0 || nums1[i] >= nums2[j]) {
                nums1[r] = nums1[i];
                i--;
            } else {
                nums1[r] = nums2[j];
                j--;
            }
            r--;
        }
    }
}
