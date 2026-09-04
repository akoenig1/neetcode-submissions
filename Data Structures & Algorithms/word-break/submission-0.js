class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const dp = new Array(s.length + 1).fill(false);
        dp[s.length] = true;

        for (let i = s.length - 1; i >= 0; i--) {
            for (let j = i; j < s.length; j++) {
                if (wordDict.includes(s.slice(i, j+1)) && dp[j+1]) {
                    dp[i] = true;
                }
            }
        }

        return dp[0];
    }
}
