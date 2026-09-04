class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;

        const countPalindromes = (l, r) => {
            while (
                l >= 0 &&
                r < s.length &&
                s[l] === s[r]
            ) {
                res++;
                l--;
                r++;
            }
        }

        for (let i = 0; i < s.length; i++) {
            countPalindromes(i, i);
            countPalindromes(i, i+1);
        }

        return res;
    }
}
