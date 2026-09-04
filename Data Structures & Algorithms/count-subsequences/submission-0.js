class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const m = s.length;
        const n = t.length;
        const dp = Array.from(
            { length: m + 1 },
            () => Array(n + 1).fill(0)
        );

        for (let i = 0; i <= m; i++) {
            dp[i][n] = 1;
        }

        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                dp[i][j] = dp[i+1][j];
                if (s[i] === t[j]) {
                    dp[i][j] += dp[i+1][j+1];
                }
            }
        }

        return dp[0][0];
    }

    // Recursive (Top Down)
    // numDistinct(s, t) {
    //     const m = s.length;
    //     const n = t.length;
    //     const cache = Array.from(
    //         { length: m + 1 },
    //         Array(n + 1).fill(-1)
    //     );

    //     const dfs = (i, j) => {
    //         if (j === n) return 1;
    //         if (i === m) return 0;
    //         if (cache[i][j] !== -1) return cache[i][j];

    //         let res = dfs(i+1, j);
    //         if (s[i] === t[j]) {
    //             res += dfs(i+1, j+1);
    //         }
    //         cache[i][j] = res;
    //         return res;
    //     }

    //     return dfs(0, 0);
    // }
}
