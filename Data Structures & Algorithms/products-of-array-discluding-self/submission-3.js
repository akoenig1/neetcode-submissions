class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftProducts = new Array(nums.length);
        const rightProducts = new Array(nums.length);
        const res = new Array(nums.length);

        let prod = 1;
        for (let i = 0; i < nums.length; i++) {
            leftProducts[i] = prod * nums[i];
            prod = leftProducts[i];
        }

        prod = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            rightProducts[i] = prod * nums[i];
            prod = rightProducts[i];
        }

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                res[i] = rightProducts[i+1];
            } else if (i === (nums.length - 1)) {
                res[i] = leftProducts[i-1];
            } else {
                res[i] = leftProducts[i-1] * rightProducts[i+1];
            }
        }

        return res;
    }
}
