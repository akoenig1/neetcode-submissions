class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numberCounts = {};
        for (const num of nums) {
            if (!numberCounts[num]) numberCounts[num] = 0;
            numberCounts[num]++;
        }

        const frequencies = Array.from({ length: nums.length + 1 }, () => new Array());
        for (const num in numberCounts) {
            const count = numberCounts[num];
            frequencies[count].push(num);
        }

        const res = [];
        let i = frequencies.length - 1;
        while (k > 0) {
            if (frequencies[i].length > 0) {
                for (const num of frequencies[i]) {
                    res.push(num);
                    k--;
                }
            }
            i--;
        }

        return res;
    }
}
