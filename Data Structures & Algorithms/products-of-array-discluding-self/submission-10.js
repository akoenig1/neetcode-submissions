class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        
        const products = new Array(n - 1).fill(1);

        for (let i = 1; i < n; i++) {
            products[i] = products[i-1] * nums[i-1];
        }

        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            products[i] *= postfix
            postfix *= nums[i];
        }

        return products;
    }
}
