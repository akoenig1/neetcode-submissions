class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;
        const charCounts = {};
        let mostFreq = 0;

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const c = s[r];

            charCounts[c] = (charCounts[c] || 0) + 1;
            mostFreq = Math.max(mostFreq, charCounts[c]);

            if ((r - l + 1) > (mostFreq + k)) {
                charCounts[s[l]]--;
                l++;
            }

            longest = Math.max(longest, (r - l + 1));
        }

        return longest;
    }
}
