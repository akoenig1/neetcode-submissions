class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    gcdOfStrings(str1, str2) {
        let gcd = '';
        const len1 = str1.length;
        const len2 = str2.length;
        const lenShortest = Math.min(len1, len2);

        for (let i = lenShortest; i >= 0; i--) {
            if (len1 % i === 0 && len2 % i === 0) {
                const divisor = str1.slice(0, i);
                if (
                    divisor.repeat(len1 / i) === str1 &&
                    divisor.repeat(len2 / i) === str2
                ) {
                    gcd = divisor;
                    break;
                }
            }
        }

        return gcd;
    }
}
