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
            const comp = target - num;
            
            if (comps[num] != null) {
                return [comps[num], i];
            }

            comps[comp] = i;
        }

        return [-1, -1];
    }
}
