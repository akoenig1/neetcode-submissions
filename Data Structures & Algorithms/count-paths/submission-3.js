class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = Array.from({ length: m }, () => Array(n).fill(-1));

        const dfs = (r, c) => {
            if (r >= m || c >= n) return 0;
            if (r === m - 1 || c === n - 1) return 1;
            if (memo[r][c] > -1) return memo[r][c];

            memo[r][c] = dfs(r+1, c) + dfs(r, c+1);
            return memo[r][c];
        }

        return dfs(0, 0);
    }
}
