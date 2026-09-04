class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxL = 0;
        let maxR = 0;

        const findLongestFrom = (l, r) => {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l > maxR - maxL) {
                    maxL = l;
                    maxR = r;
                }
                l--;
                r++;
            }
        }

        for (let i = 0; i < s.length; i++) {
            findLongestFrom(i, i);
            findLongestFrom(i, i + 1);
        }

        return s.substring(maxL, maxR + 1);
    }
}
