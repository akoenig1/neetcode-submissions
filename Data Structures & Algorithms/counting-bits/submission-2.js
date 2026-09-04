class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [];

        for (let num = 0; num <= n; num++) {
            let count = 0;

            for (let i = 0; i < 32; i++) {
                if (1 & (num >>> i)) count++;
            }

            res.push(count);
        }

        return res;
    }
}
