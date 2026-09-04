class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const record = [];

        for (const op of operations) {
            const n = record.length;
            switch (op) {
                case '+':
                    const a = record[n-1];
                    const b = record[n-2];
                    record.push(a + b);
                    break;
                case 'D':
                    const prev = record[n-1];
                    record.push(2 * prev);
                    break;
                case 'C':
                    record.pop();
                    break;
                default: 
                    record.push(parseInt(op));
            }
        }

        return record.reduce((a, b) => a + b, 0);
    }
}
