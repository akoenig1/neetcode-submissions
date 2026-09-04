class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charsInWindow = new Set();
        let longest = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            while (charsInWindow.has(s[r])) {
                charsInWindow.delete(s[l]);
                l++;
            }
            charsInWindow.add(s[r]);
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
