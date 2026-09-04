class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const n = nums.length;
        const res = [];

        const backtrack = (i, subset) => {
            if (i === n) {
                res.push([...subset]);
                return;
            }

            backtrack(i+1, [...subset, nums[i]]);
            while (i+1 < n && nums[i] === nums[i+1]) i++;
            backtrack(i+1, [...subset]);
        }

        nums = nums.sort((a, b) => a - b);
        backtrack(0, []);

        return res;
    }
}
