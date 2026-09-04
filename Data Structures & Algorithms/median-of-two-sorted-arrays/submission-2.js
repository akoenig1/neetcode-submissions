class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;
        const total = A.length + B.length;
        const half = Math.floor((total + 1) / 2);

        if (A.length > B.length) [A, B] = [B, A];

        let l = 0;
        let r = A.length;
        while (l <= r) {
            let i = l + Math.floor((r - l) / 2);
            let j = half - i;

            const AL = i > 0 ? A[i-1] : Number.MIN_SAFE_INTEGER;
            const BL = j > 0 ? B[j-1] : Number.MIN_SAFE_INTEGER;
            const AR = i < A.length ? A[i] : Number.MAX_SAFE_INTEGER;
            const BR = j < B.length ? B[j] : Number.MAX_SAFE_INTEGER;
            if (AL <= BR && BL <= AR) {
                const maxLeft = Math.max(AL, BL);
                const minRight = Math.min(AR, BR);

                return total % 2 === 0
                    ? (maxLeft + minRight) / 2
                    : maxLeft;
            } else if (AL > BR) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }

        return -1;
    }
}
