class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums) {
        const prefix = new Array(nums.length);
        const postfix = new Array(nums.length);
        const res = new Array(nums.length);

        let prod = 1;
        for (let i = 0; i < nums.length; i++) {
            prod *= nums[i];
            prefix[i] = prod;
        }

        prod = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            prod *= nums[i];
            postfix[i] = prod;
        }

        console.log(prefix);
        console.log(postfix);

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                res[i] = postfix[i+1];
            } else if (i === nums.length - 1) {
                res[i] = prefix[i-1];
            } else {
                res[i] = prefix[i-1] * postfix[i+1];
            }
        }

        return res;
    }
}
