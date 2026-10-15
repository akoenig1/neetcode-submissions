class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let l = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                [nums[i], nums[l]] = [nums[l], nums[i]];
                l++;
            }
        }
                        
        let r = nums.length - 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] === 2) {
                [nums[i], nums[r]] = [nums[r], nums[i]];
                r--;
            }
        }
    }
}
