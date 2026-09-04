class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let inputDiff = 0;
        let completeDiff = nums.length;

        for (let i = 0; i < nums.length; i++) {
            inputDiff ^= nums[i];
            completeDiff ^= i;
        }
        
        return inputDiff ^ completeDiff;
    }
}
