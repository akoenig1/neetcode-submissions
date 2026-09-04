class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0;
        const chars = new Set();

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            
            while(chars.has(c)) {
                chars.delete(s[l]);
                l++;
            }

            chars.add(c);
            max = Math.max(max, chars.size);
        }

        return max;
    }
}
