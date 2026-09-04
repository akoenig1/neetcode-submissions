class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = {};
        for (const num of nums) {
            if (!counts[num]) counts[num] = 0;
            counts[num]++;
        }

        const freqs = Array.from({ length: nums.length + 1 }, () => []);
        for (const num in counts) {
            const freq = counts[num];
            freqs[freq].push(num);
        }

        const res = [];
        let i = nums.length;
        while (res.length < k && i > 0) {
            if (freqs[i].length > 0) {
                for (const num of freqs[i]) {
                    res.push(num);
                }
            }
            i--;
        }

        return res;
    }
}
