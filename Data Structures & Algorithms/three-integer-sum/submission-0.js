class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];

        const sorted = nums.sort((a, b) => a - b);

        for (let i = 0; i < sorted.length - 2; i++) {
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;
            
            let l = i + 1;
            let r = sorted.length - 1;
            while (l < r) {
                const sum = sorted[i] + sorted[l] + sorted[r];

                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    res.push([sorted[i], sorted[l], sorted[r]]);
                    l++;
                    while (nums[l] === nums[l-1] && l < r) {
                        l++;
                    }
                }
            }
        }

        return res;
    }
}
