class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;
        const memo = new Array(n).fill(-1);

        const dfs = (i) => {
            if (i >= n) return 0;
            if (memo[i] >= 0) return memo[i];
        
            memo[i] = Math.min(
                cost[i] + dfs(i+1),
                cost[i] + dfs(i+2)
            );

            return memo[i];
        }

        return Math.min(dfs(0), dfs(1))
    }
}
