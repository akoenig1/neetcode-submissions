class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqs = {};

        for (const num of nums) {
            if (!freqs[num]) freqs[num] = 0;
            freqs[num]++;
        }

        const counts = new Array(nums.length + 1).fill(0).map(() => []);

        for (const num in freqs) {
            const freq = freqs[num];
            counts[freq].push(num);
        }

        const res = [];
        let i = counts.length - 1;

        while (res.length < k) {
            const count = counts[i];

            for (const num of count) {
                res.push(num);
            }

            i--;
        }

        return res;
    }
}
