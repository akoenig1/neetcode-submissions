class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let l = 0;
        const n = prices.length;

        for (let r = 1; r < n; r++) {
            if (prices[r] <= prices[l]) {
                l = r;
            } else {
                const profit = prices[r] - prices[l];
                max = Math.max(max, profit);
            }
        }

        return max;
    }
}
