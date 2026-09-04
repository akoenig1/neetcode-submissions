class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = new Array(nums.length);
        const right = new Array(nums.length);
        const res = new Array(nums.length);
        
        let prod = 1;
        for (let i = 0; i < nums.length; i++) {
            left[i] = prod * nums[i];
            prod = left[i];
        }

        prod = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            right[i] = prod * nums[i];
            prod = right[i];
        }

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                res[i] = right[i+1];
            } else if (i === nums.length - 1) {
                res[i] = left[i-1];
            } else {
                res[i] = left[i-1] * right[i+1];
            }
        }
        
        return res;
    }
}
