class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0; 
        const sumCounts = {};
        let sum = 0;
        
        for (const num of nums) {
            sumCounts[sum] = (sumCounts[sum] || 0) + 1;
            sum += num;
            res += sumCounts[sum - k] || 0;
        }

        return res;
    }
}
