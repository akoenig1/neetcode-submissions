class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        if (n === 1) return nums[0];

        const robFirst = this.robLine(nums.slice(0, n-1));
        const robLast = this.robLine(nums.slice(1));

        return Math.max(robFirst, robLast);
    }

    robLine(nums) {
        const n = nums.length;
        const dp = new Array(n).fill(0);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2]);
        }

        return dp[n-1];
    }
}
