class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const n = nums.length;
        let l = 0;
        let r = 0;
        while (r < n) {
            nums[l] = nums[r];
            while (nums[l] === nums[r]) {
                r++;
            }
            l++;
        }

        return l;
    }
}
