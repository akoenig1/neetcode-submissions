class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let red = 0;
        let white = 0;
        let blue = 0;
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                nums[blue++] = 2;
                nums[white++] = 1;
                nums[red++] = 0;
            } else if (nums[i] === 1) {
                nums[blue++] = 2;
                nums[white++] = 1;
            } else if (nums[i] === 2) {
                nums[blue++] = 2;
            }
        }
    }
}
