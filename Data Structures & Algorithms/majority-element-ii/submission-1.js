class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        nums.sort((a, b) => a - b);
        const res = [];
        const n = nums.length;
        const ONE_THIRD = Math.floor(n / 3);

        let start = 0;
        let candidate = nums[0];
        for (let i = 1; i < n; i++) {
            if (nums[i] !== candidate) {
                if (i - start > ONE_THIRD) {
                    res.push(candidate);
                }
                
                candidate = nums[i];
                start = i;
            }
        }
        
        if (n - start > ONE_THIRD) {
            res.push(candidate);
        }

        return res;
    }
}
