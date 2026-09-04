class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;

        let l = 0;
        let r = 1;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                const profit = prices[r] - prices[l];
                max = Math.max(max, profit);
            } else {
                l = r
            }
            r++;
        }

        return max;
    }
}
