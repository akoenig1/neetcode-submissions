class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        num1 = num1.split('');
        num2 = num2.split('');
        const m = num1.length;
        const n = num2.length;
        const res = new Array(m + n).fill(0);

        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                res[i+j+1] += num1[i] * num2[j];
            }
        }

        for (let k = res.length - 1; k >= 0; k--) {
            const product = res[k];
            if (product >= 10) {
                res[k] = product % 10;
                res[k-1] += Math.floor(product / 10);
            }
        }

        let k = 0;
        while (k < res.length - 1 && res[k] === 0) k++;

        return res.slice(k).join('');
    }
}
