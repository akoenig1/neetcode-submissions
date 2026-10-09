class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        const backtrack = (i, total) => {
            if (i === nums.length) return total;

            return (
                backtrack(i+1, total ^ nums[i]) +
                backtrack(i+1, total)
            );
        }

        return backtrack(0, 0);
    }
}
