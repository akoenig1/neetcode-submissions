class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);
        
        const n = nums.length;
        const res = [];

        for (let a = 0; a < n-3; a++) {
            while (a > 0 && nums[a] === nums[a-1]) a++;
            for (let b = a+1; b < n-2; b++) {
                while (b > a + 1 && nums[b] === nums[b-1]) b++;
                let c = b + 1;
                let d = n - 1;
                while (c < d) {
                    const sum = nums[a] + nums[b] + nums[c] + nums[d];
                    if (sum < target) {
                        c++
                    } else if (sum > target) {
                        d--;
                    } else {
                        res.push([nums[a], nums[b], nums[c], nums[d]]);
                        c++;
                        d--;
                        while (c < d && nums[c] === nums[c-1]) c++;
                        while (c < d && nums[d] === nums[d+1]) d--;
                    }
                }
            }
        }

        return res;
    }
}
