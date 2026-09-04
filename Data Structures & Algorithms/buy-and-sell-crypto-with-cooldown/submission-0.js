class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        // [maxWhenHolding, maxWhenCanBuy]
        const dp = Array.from({ length: n + 1 }, () => [0, 0]);

        for (let i = n - 1; i >= 0; i--) {
            for (let canBuy = 1; canBuy >= 0; canBuy --) {
                if (canBuy === 1) {
                    // buy today, subtract price from tomorrow best when holding
                    let buy = dp[i+1][0] - prices[i];
                    // skip today, take tomorrows best when can buy
                    let cooldown = dp[i+1][1];
                    dp[i][1] = Math.max(buy, cooldown);
                } else {
                    // sell today, add price to best when buying 2 days from now (bc account for cooldown)
                    let sell = i + 2 < n
                        ? dp[i+2][1] + prices[i]
                        : prices[i];
                    // skip today, take tomorrows best when holding
                    let cooldown = dp[i+1][0]
                    dp[i][0] = Math.max(sell, cooldown);
                }
            }
        }

        return dp[0][1];
    }
}
