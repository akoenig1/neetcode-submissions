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
            const sc = s[i];
            const tc = t[i];

            if (!sChars[sc]) sChars[sc] = 0;
            if (!tChars[tc]) tChars[tc] = 0;

            sChars[sc]++;
            tChars[tc]++;
        }

        for (let c in sChars) {
            if (sChars[c] !== tChars[c]) return false;
        }

        return true;
    }
}
