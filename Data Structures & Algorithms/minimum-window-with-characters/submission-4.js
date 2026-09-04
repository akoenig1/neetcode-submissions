class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const sCounts = {};
        const tCounts = {};
        for (const c of t) {
            if (!sCounts[c]) sCounts[c] = 0;
            if (!tCounts[c]) tCounts[c] = 0;
            tCounts[c]++;
        }

        let minLen = Number.POSITIVE_INFINITY;
        let start = -1;
        let needed = Object.keys(tCounts).length;
        let matches = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            if (tCounts[s[r]]) {
                sCounts[s[r]]++;
                if (sCounts[s[r]] === tCounts[s[r]]) matches++;
            }

            while (matches === needed) {
                if ((r - l + 1) < minLen) {
                    minLen = r - l + 1;
                    start = l;
                }
                
                if (tCounts[s[l]]) sCounts[s[l]]--;
                if (sCounts[s[l]] < tCounts[s[l]]) matches--;
                l++;
            }
        }

        return start > -1 ? s.substring(start, start + minLen) : "";
    }
}
