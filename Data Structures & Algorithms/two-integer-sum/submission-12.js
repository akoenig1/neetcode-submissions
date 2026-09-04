class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complements = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const comp = target - num;
            if (complements[comp] !== undefined) {
                return [complements[comp], i];
            }
            complements[num] = i;
        }

        return [-1, -1];
    }
}
