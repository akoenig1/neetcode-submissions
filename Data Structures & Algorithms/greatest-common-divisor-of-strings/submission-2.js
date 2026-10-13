class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    gcdOfStrings(str1, str2) {
        if (str1 + str2 !== str2 + str1) {
            return '';
        }

        const gcd = (a, b) => {
            if (b === 0) {
                return a;
            } else {
                return gcd(b, a % b);
            }
        }

        const idx = gcd(
            Math.max(str1.length, str2.length),
            Math.min(str1.length, str2.length)
        );
        
        return str1.slice(0, idx);
    }
}
