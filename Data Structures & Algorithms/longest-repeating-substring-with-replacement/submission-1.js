class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let l = 0;
        let mostFreqChar = '';
        const charsInSubStr = new Map();
        charsInSubStr[mostFreqChar] = 0;

        for (let r = 0; r < s.length; r++) {
            const c = s[r];

            if (!charsInSubStr[c]) charsInSubStr[c] = 0;
            charsInSubStr[c]++;

            if (charsInSubStr[c] > charsInSubStr[mostFreqChar]) mostFreqChar = c;

            // compare k to substring length minus most frequent char
            if ((r - l + 1 - charsInSubStr[mostFreqChar]) > k) {
                charsInSubStr[s[l]]--;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
