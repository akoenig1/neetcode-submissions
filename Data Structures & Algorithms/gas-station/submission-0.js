class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const gasSum = gas.reduce((a, b) => a + b, 0);
        const costSum = cost.reduce((a, b) => a + b, 0);
        if (gasSum < costSum) return -1;

        let start = 0;
        let gasLeft = 0;
        for (let i = 0; i < gas.length; i++) {
            if (gasLeft < 0)  {
                start = i;
                gasLeft = 0;
            }
            
            gasLeft += gas[i] - cost[i];
        }

        return start;
    }
}
