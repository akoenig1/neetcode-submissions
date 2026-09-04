class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        const DIRS = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];

        const dp = Array.from(
            { length: ROWS }, 
            () => Array(COLS).fill(-1)
        );

        const dfs = (r, c, parentVal) => {
            if (
                r < 0 ||
                r >= ROWS ||
                c < 0 ||
                c >= COLS ||
                matrix[r][c] <= parentVal
            ) return 0;

            if (dp[r][c] !== -1) return dp[r][c];

            let res = 1;
            for (const [dr, dc] of DIRS) {
                res = Math.max(
                    res, 
                    1 + dfs(r + dr, c + dc, matrix[r][c])
                );
            }

            dp[r][c] = res;
            return res;
        }

        let longest = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                longest = Math.max(longest, dfs(r, c, -Infinity))
            }
        }
        return longest;
    }
}
