class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        if (nums.length === 1) return 0;

        let jumps = 1;
        let farthest = 0;
        let r = nums[0];

        for (let i = 0; i < nums.length; i++) {
            if (i > r) {
                jumps++;
                r = farthest;
            }

            farthest = Math.max(farthest, i + nums[i]);
        }

        return jumps;
    }
}
