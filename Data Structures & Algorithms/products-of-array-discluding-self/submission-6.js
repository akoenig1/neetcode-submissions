class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        const pre = [];
        const post = [];

        let preProd = 1;
        let postProd = 1;
        for (let i = 0; i < nums.length; i++) {
            let j = nums.length - i - 1;

            pre[i] = preProd;
            post[j] = postProd;

            preProd *= nums[i];
            postProd *= nums[j];
        }

        for (let i = 0; i < nums.length; i++) {
            res[i] = pre[i] * post[i];
        }

        return res;
    }
}
