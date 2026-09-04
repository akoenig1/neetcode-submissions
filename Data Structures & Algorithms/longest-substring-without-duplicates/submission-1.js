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
            if (charsInWindow.has(s[r])) {
                longest = Math.max(longest, charsInWindow.size);
                while (charsInWindow.has(s[r])) {
                    charsInWindow.delete(s[l]);
                    l++;
                }
            }
            charsInWindow.add(s[r]);
        }

        longest = Math.max(longest, charsInWindow.size);

        return longest;
    }
}
