class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxLength = 1;
        let startIndex = 0;

        const expand = (l, r) => {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                const length = r - l + 1;
                if (length > maxLength) {
                    maxLength = length;
                    startIndex = l;
                }
                l--;
                r++;
            }
        }

        for (let i = 0; i < s.length; i++) {
            expand(i, i); // odd length
            expand(i, i + 1); // even length
        }

        return s.substring(startIndex, startIndex + maxLength);
    }
}
