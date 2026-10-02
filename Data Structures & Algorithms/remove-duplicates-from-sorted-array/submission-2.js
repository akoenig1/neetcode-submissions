class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const n = nums.length;
        let i = 0;
        let k = 0;

        while (i < n) {
            nums[k] = nums[i];
            i++;
            while (i < n && nums[i] === nums[k]) {
                i++;
            }
            k++;
        }

        return k;
    }
}
