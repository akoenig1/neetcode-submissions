class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = new Array(amount + 1).fill(amount + 1);
        dp[0] = 0;

        for (let i = 1; i <= amount; i++) {
            for (const coin of coins) {
                if (coin <= i) {
                    const numCoins = dp[i - coin] + 1;
                    dp[i] = Math.min(dp[i], numCoins);
                }
            } 
        }

        return dp[amount] <= amount ? dp[amount] : -1;
    }
}
