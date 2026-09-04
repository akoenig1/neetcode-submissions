class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = {};

        const dfs = (r, c) => {
            if (r >= m || c >= n) return 0;
            if (memo[`${r},${c}`] !== undefined) return memo[`${r},${c}`];
            if (r === m - 1 || c === n - 1) {
                memo[`${r},${c}`] = 1;
                return 1;
            };

            const paths = dfs(r + 1, c) + dfs(r, c + 1);
            memo[`${r},${c}`] = paths;
            return paths;
        }

        return dfs(0, 0);
    }
}
