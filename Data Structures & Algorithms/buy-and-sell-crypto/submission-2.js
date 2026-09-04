class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;

        let l = 0;
        let r = l + 1;
        while (r < prices.length) {
            if (prices[r] > prices[l]) {
                const profit = prices[r] - prices[l];
                res = Math.max(res, profit);
                r++;
            } else {
                l = r;
                r = l + 1;
            }
        }

        return res;
    }
}
