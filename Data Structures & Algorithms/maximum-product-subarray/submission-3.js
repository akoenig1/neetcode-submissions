class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0];
        let currMax = 1;
        let currMin = 1;

        for (const num of nums) {
            const temp = currMax;
            currMax = Math.max(num, num * currMax, num * currMin);
            currMin = Math.min(num, num * temp, num * currMin);
            res = Math.max(res, currMax);
        }

        return res;
    }
}
