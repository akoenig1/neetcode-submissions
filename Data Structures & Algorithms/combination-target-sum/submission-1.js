class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        const backtrack = (sum, i, curr) => {
            if (sum > target || i === nums.length) return;
            if (sum === target) {
                res.push(curr);
                return;
            }

            backtrack(sum, i+1, curr);
            backtrack(sum + nums[i], i, [...curr, nums[i]]);
        }

        backtrack(0, 0, []);

        return res;
    }
}
