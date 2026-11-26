class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const n = nums.length;
        k %= n;

        for (let i = 0; i < k; i++) {
            const temp = nums[n-1];
            
            for (let j = n - 1; j > 0; j--) {
                nums[j] = nums[j-1];
            }

            nums[0] = temp;
        }
    }
}
