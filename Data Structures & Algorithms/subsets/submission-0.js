class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        const backtrack = (i, subset, res) => {
            if (i === nums.length) {
                res.push(subset);
                return;
            }
            
            backtrack(i+1, subset, res);
            backtrack(i+1, [...subset, nums[i]], res);
        }

        backtrack(0, [], res);

        return res;
    }
}
