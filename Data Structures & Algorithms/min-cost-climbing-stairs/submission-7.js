class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;
        const memo = new Array(n).fill(-1);
        memo[0] = cost[0];
        memo[1] = cost[1];

        for (let i = 2; i < n; i++) {
            memo[i] = cost[i] + Math.min(memo[i-1], memo[i-2]);
        }

        return Math.min(memo[n-1], memo[n-2]);
    }
}
