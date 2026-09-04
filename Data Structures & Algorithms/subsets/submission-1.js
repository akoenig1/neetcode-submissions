class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        const backtrack = (i, subset) => {
            if (i === nums.length) {
                res.push(subset);
                return;
            }

            backtrack(i + 1, subset);
            backtrack(i + 1, [...subset, nums[i]]);
        }
        backtrack(0, []);

        return res;
    }
}
