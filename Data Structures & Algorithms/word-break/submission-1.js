class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        // dp array indicates whether or not a valid combo of strings can be built from that index
        const dp = new Array(s.length + 1).fill(false);
        // empty string is valid result
        dp[s.length] = true;

        // work backwords through string
        for (let i = s.length - 1; i >= 0; i--) {
            for (let j = i; j < s.length; j++) {
                // work forward from i to see if we can find a word in dict AND that word leads to valid path to end of s
                if (wordDict.includes(s.slice(i, j+1)) && dp[j+1]) {
                    dp[i] = true;
                }
            }
        }

        return dp[0];
    }
}
