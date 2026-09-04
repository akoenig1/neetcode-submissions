class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;
        let l = 0;
        let mostFreqChar = '';
        const charsInSubstring = new Map();
        charsInSubstring[mostFreqChar] = 0;

        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            if (!charsInSubstring[c]) charsInSubstring[c] = 0;
            charsInSubstring[c]++;
            if (charsInSubstring[c] > charsInSubstring[mostFreqChar]) mostFreqChar = c;

            if ((r - l + 1 - charsInSubstring[mostFreqChar]) > k) {
                charsInSubstring[s[l]]--;
                l++;
            }

            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
