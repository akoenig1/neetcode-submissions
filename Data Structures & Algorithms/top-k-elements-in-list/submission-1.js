class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = {};
        const freqs = {};

        for (let num of nums) {
            if (!counts[num]) counts[num] = 0;
            counts[num]++;
        }

        for (let num in counts) {
            const count = counts[num];
            if (!freqs[count]) freqs[count] = [];
            freqs[count].push(num);
        }

        const res = [];
        let j = 0;

        for (let i = nums.length; i > 0; i--) {
            if (freqs[i] != null) {
                for (let num of freqs[i]) {
                    res.push(num);
                    j++;
                    if (j === k) return res;
                }
            }
        }
    }
}
