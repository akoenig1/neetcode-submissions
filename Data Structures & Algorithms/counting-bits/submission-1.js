class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [];

        for (let i = 0; i <= n; i++) {
            let count = 0;

            for (let j = 0; j < 32; j++) {
                if (1 & (i >>> j)) count++;
            }

            res.push(count);
        }

        return res;
    }
}
