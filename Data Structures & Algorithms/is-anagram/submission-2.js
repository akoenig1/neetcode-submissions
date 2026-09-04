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
            const sChar = s[i];
            const tChar = t[i];

            if (!sChars[sChar]) sChars[sChar] = 0;
            if (!tChars[tChar]) tChars[tChar] = 0;
            sChars[sChar]++;
            tChars[tChar]++;
        }

        for (let c in sChars) {
            if (sChars[c] !== tChars[c]) return false;
        }

        return true;
    }
}
