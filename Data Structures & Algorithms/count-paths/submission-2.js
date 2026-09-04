class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        dp[m-1][n-1] = 1;
        for (let r = m - 1; r >= 0; r--) {
            for (let c = n - 1; c >= 0; c--) {
                dp[r][c] += dp[r+1][c] + dp[r][c+1];
            }
        }

        return dp[0][0];
    }
}
