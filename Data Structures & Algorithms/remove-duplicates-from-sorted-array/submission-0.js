class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0;
        let r = 1;
        while (r < nums.length) {
            if (nums[l] === nums[r]) {
                nums.splice(r, 1);
            } else {
                l++;
                r++;
            }
        }

        return nums.length;
    }
}
