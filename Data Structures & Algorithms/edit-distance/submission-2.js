class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const m = word1.length;
        const n = word2.length;

        const dp = Array.from(
            { length: m + 1 },
            () => Array(n + 1).fill(0)
        );

        // cost to turn word1 to empty string by removing
        for (let i = 0; i <= m; i++) {
            dp[i][n] = m - i;
        }
        // cost to turn empty string to word2 by inserting
        for (let j = 0; j <= n; j++) {
            dp[m][j] = n - j;
        }

        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                // if chars at both current indices are the same, no additional cost
                if (word1[i] === word2[j]) {
                    dp[i][j] = dp[i+1][j+1];
                // else add 1 to min of cost of insert, remove or replace
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i+1][j+1],
                        dp[i+1][j],
                        dp[i][j+1]
                    );
                }
            }
        }

        return dp[0][0];
    }
}
