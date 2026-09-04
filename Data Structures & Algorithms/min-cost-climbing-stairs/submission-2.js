class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;
        let twoBelow = 0;
        let oneBelow = 0;

        for (let i = 2; i <= n; i++) {
            const temp = oneBelow;
            oneBelow = Math.min(cost[i-1] + oneBelow, cost[i-2] + twoBelow);
            twoBelow = temp;
        }

        return oneBelow;
    }
}
