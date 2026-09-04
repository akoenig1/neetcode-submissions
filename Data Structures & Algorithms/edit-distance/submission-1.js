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

        // represents removing chars to turn "abcd" to "" 
        for (let i = 0; i <= m; i++) {
            dp[i][0] = i;
        }
        // represents inserting chars to turn "" into "abcd"
        for (let j = 0; j <= n; j++) {
            dp[0][j] = j
        }
        
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (word1[i-1] === word2[j-1]) {
                    // no operation required, take min count from last i, j
                    dp[i][j] = dp[i-1][j-1];
                } else {
                    // must insert, remove or replace. Determine which is cheapest
                    dp[i][j] = 1 + Math.min(
                        dp[i-1][j-1],
                        dp[i][j-1],
                        dp[i-1][j]
                    );
                }
            }
        }

        return dp[m][n];
    }
}
