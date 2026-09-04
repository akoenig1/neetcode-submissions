class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const n = s.length;
        const dp = new Array(n + 1).fill(0);
        dp[n] = 1;

        for (let i = n - 1; i >= 0; i--) {
            if (s.charAt(i) === '0') {
                dp[i] = 0;
            } else {
                dp[i] = dp[i+1];

                if (
                    i + 1 < n &&
                    (
                        s.charAt(i) === '1' ||
                        (s.charAt(i) === '2' && s.charAt(i+1) < '7')
                    )
                ) {
                    dp[i] += dp[i+2];
                }
            }
        }

        return dp[0];
    }
}
