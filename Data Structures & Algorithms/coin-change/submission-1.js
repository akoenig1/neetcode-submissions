class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const memo = {};

        const dfs = (amount) => {
            if (amount === 0) return 0;
            if (memo[amount] !== undefined) return memo[amount];

            let minCoins = Number.POSITIVE_INFINITY;
            for (const coin of coins) {
                const remaining = amount - coin;
                if (remaining >= 0) {
                    minCoins = Math.min(minCoins, 1 + dfs(remaining));
                }
            }

            memo[amount] = minCoins;
            return minCoins;
        }

        const res = dfs(amount);
        return res === Number.POSITIVE_INFINITY ? -1 : res;
    }
}
