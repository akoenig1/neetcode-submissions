class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        const backtrack = (i, combo, sum) => {
            if (i >= nums.length || sum > target) return;
            if (sum === target) {
                res.push([...combo]);
                return;
            }

            combo.push(nums[i]);
            backtrack(i, combo, sum + nums[i]);
            combo.pop();
            backtrack(i + 1, combo, sum);
        }

        backtrack(0, [], 0);

        return res;
    }
}
