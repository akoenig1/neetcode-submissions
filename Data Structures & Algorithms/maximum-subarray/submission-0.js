class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currSum = 0;
        let maxSum = nums[0];

        for (const num of nums) {
            if (currSum < 0) currSum = 0;
            currSum += num;
            maxSum = Math.max(currSum, maxSum);
        }

        return maxSum;
    }
}
