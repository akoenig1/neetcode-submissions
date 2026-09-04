class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complements = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (complements.has(num)) {
                return [complements.get(num), i];
            }
            const complement = target - num;
            complements.set(complement, i);
        }

        return [];
    }
}
