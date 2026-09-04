class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let min = Infinity;
        let sum = 0;

        let l = 0;
        for (let r = 0; r < nums.length; r++) {
            sum += nums[r];

            while (sum >= target && l <= r) {
                min = Math.min(min, r - l + 1);
                sum -= nums[l];
                l++;
            }
        }

        return min < Infinity ? min : 0;
    }
}
