class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];

        const backtrack = (curr, currSet) => {
            if (curr.length === nums.length) {
                res.push([...curr]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (!currSet.has(i)) {
                    curr.push(nums[i]);
                    currSet.add(i);

                    backtrack(curr, currSet);

                    curr.pop()
                    currSet.delete(i);
                }
            }
        }

        backtrack([], new Set());

        return res;
    }
}
