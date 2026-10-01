class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2);
            const num = nums[m];
            if (num < target) {
                l = m + 1;
            } else if (num > target) {
                r = m - 1;
            } else {
                return m;
            }
        }

        return l;
    }
}
