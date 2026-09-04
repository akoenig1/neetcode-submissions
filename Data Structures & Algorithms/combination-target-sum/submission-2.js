class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        const backtrack = (i, sum, combo) => {
            if (i === nums.length || sum > target) return
            if (sum === target) {
                res.push(combo);
                return;
            }

            backtrack(i+1, sum, combo);
            backtrack(i, sum + nums[i], [...combo, nums[i]]);
        }

        backtrack(0, 0, []);

        return res;
    }
}
