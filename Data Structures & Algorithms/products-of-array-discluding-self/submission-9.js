class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        
        const products = [];
        const prefix = [];
        const suffix = [];

        for (let i = 0; i < n; i++) {
            prefix[i] = (prefix[i-1] ?? 1) * (nums[i-1] ?? 1);
        }

        for (let i = n - 1; i >= 0; i--) {
            suffix[i] = (suffix[i+1] ?? 1) * (nums[i+1] ?? 1);
        }

        for (let i = 0; i < n; i++) {
            products[i] = prefix[i] * suffix[i];
        }

        return products;
    }
}
