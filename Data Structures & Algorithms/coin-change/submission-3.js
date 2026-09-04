class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = new Array(amount + 1).fill(Number.POSITIVE_INFINITY);
        dp[0] = 0;

        for (let i = 1; i <= amount; i++) {
            let minCoins = Number.POSITIVE_INFINITY;

            for (const coin of coins) {
                if (i - coin >= 0) {
                    const numCoins = dp[i - coin] + 1;
                    minCoins = Math.min(minCoins, numCoins);
                    console.log(numCoins, minCoins);
                }
            }
            
            dp[i] = minCoins;
        }

        return dp[amount] < Number.POSITIVE_INFINITY ? dp[amount] : -1;
    }
}
