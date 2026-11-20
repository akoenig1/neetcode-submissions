class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const n = nums.length;
        const res = [];

        let i = 0;
        while (i < n - 2) {
            while (i > 0 && nums[i] === nums[i-1]) {
                i++;
            }
            
            let l = i + 1;
            let r = n - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l-1]) {
                        l++;
                    }
                }
            }

            i++;
        }

        return res;
    }
}
