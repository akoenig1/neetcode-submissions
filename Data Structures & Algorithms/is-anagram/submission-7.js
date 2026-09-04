class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sChars = {};
        const tChars = {};

        for (let i = 0; i < s.length; i++) {
            const sC = s[i];
            const tC = t[i];

            if (!sChars[sC]) sChars[sC] = 0;
            if (!tChars[tC]) tChars[tC] = 0;
            sChars[sC]++;
            tChars[tC]++;
        }

        for (const c in sChars) {
            if (sChars[c] !== tChars[c]) return false;
        }

        return true;
    }
}
