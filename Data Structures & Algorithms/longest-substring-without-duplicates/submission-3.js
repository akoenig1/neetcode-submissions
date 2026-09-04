class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charsInWindow = new Set();
        let res = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            while (charsInWindow.has(s[r])) {
                charsInWindow.delete(s[l]);
                l++;
            }
            charsInWindow.add(s[r]);
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
