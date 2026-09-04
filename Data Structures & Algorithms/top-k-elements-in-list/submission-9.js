class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = [];
        const n = nums.length;

        const integerCounts = {};
        for (const num of nums) {
            if (!integerCounts[num]) integerCounts[num] = 0;
            integerCounts[num]++;
        }
        
        const frequencies = Array.from({ length: n + 1 }, () => []);
        
        for (const integer in integerCounts) {
            const freq = integerCounts[integer];
            frequencies[freq].push(integer);
        }
        
        let i = n;
        while (i > 0 && res.length < k) {
            for (const num of frequencies[i]) {
                res.push(num);
            }
            i--;
        }

        return res;
    }
}
