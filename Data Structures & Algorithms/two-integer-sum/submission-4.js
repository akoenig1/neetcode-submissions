class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const comps = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (comps[num] != null) return [comps[num], i];
            
            const comp = target - num;
            comps[comp] = i;
        }

        return [-1, -1];
    }
}
