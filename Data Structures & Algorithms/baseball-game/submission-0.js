class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const res = [];

        for (const op of operations) {
            const n = res.length; 

            if (op === '+') {
                res.push(res[n-1] + res[n-2]);
            } else if (op === 'C') {
                res.pop();
            } else if (op === 'D') {
                res.push(res[n-1] * 2);
            } else {
                res.push(parseInt(op));
            }
        }

        return res.reduce((a, b) => a + b, 0);
    }
}
