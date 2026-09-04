class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numCounts = {};
        for (const num of nums) {
            if (!numCounts[num]) numCounts[num] = 0;
            numCounts[num]++;
        }
        const countGroups = Array.from(
            { length: nums.length + 1 },
            () => []
        );
        for (const num in numCounts) {
            const count = numCounts[num];
            countGroups[count].push(num);
        }

        const res = [];
        for (let i = nums.length; i >= 0; i--) {
            const numsWithCount = countGroups[i];
            for (const num of numsWithCount) {
                res.push(num);
                if (res.length === k) return res;
            }
        }

        return res;
    }
}
