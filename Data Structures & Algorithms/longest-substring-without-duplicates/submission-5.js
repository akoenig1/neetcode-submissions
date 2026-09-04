class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let charsInWindow = new Set();

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const c = s[r];

            while (charsInWindow.has(c)) {
                charsInWindow.delete(s[l]);
                l++;
            }
            
            charsInWindow.add(c);
            longest = Math.max(longest, charsInWindow.size);
        }

        return longest;
    }
}
