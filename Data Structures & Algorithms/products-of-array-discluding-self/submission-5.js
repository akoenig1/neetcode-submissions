class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = new Array(nums.length);
        const suffix = new Array(nums.length);
        const res = new Array(nums.length);

        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            prefix[i] = product * nums[i];
            product = prefix[i];
        }
        
        product = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            suffix[i] = product * nums[i];
            product = suffix[i];
        }

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                res[i] = suffix[i+1];
            } else if (i === nums.length - 1) {
                res[i] = prefix[i-1];
            } else {
                res[i] = prefix[i-1] * suffix[i+1];
            }
        }

        return res;
    }
}
