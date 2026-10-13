class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const visited = new Set();

        while (!visited.has(n)) {
            if (n === 1) return true;
            visited.add(n);

            const digits = n.toString().split('');
            for (let i = 0; i < digits.length; i++) {
                digits[i] = (+digits[i]) ** 2;
            }
            n = digits.reduce((a, b) => a + b, 0);
        }

        return false;
    }
}
