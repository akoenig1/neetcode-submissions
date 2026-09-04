class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const sFreqs = {};
        const tFreqs = {};
        for (const c of t) {
            if (!sFreqs[c]) sFreqs[c] = 0;
            if (!tFreqs[c]) tFreqs[c] = 0;
            tFreqs[c]++;
        }

        let minLength = Number.POSITIVE_INFINITY;
        let minStart = -1;
        let neededChars = Object.keys(tFreqs).length;
        let validChars = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const cr = s[r];
            if (tFreqs[cr]) {
                sFreqs[cr]++;
                if (sFreqs[cr] === tFreqs[cr]) validChars++;
            }

            while (validChars === neededChars) {
                if ((r - l + 1) < minLength) {
                    minLength = r - l + 1;
                    minStart = l;
                }
                const cl = s[l];
                if (tFreqs[cl]) sFreqs[cl]--;
                if (sFreqs[cl] < tFreqs[cl]) validChars--;
                l++;
            }
        }

        return minLength < Number.POSITIVE_INFINITY ? s.substring(minStart, minStart + minLength) : "";
    }
}
