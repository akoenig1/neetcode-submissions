class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

        let res = "";
        
        const tCounts = {};
        for (const c of t) {
            tCounts[c] = (tCounts[c] || 0) + 1;
        }

        const matchesNeeded = Object.keys(tCounts).length;
        let matches = 0;

        const sCounts = {};
        let r = 0;
        for (let l = 0; l <= s.length - t.length; l++) {
            while (r < s.length && matches < matchesNeeded) {
                const c = s[r];
                sCounts[c] = (sCounts[c] || 0) + 1;
                if (sCounts[c] === tCounts[c]) matches++;
                r++;
            }

            if (matches === matchesNeeded) {
                if (res.length === 0 || r - l < res.length) {
                    res = s.substring(l, r);
                }

                const c = s[l];
                sCounts[c]--;
                if (tCounts[c] && sCounts[c] === tCounts[c] - 1) matches--;
            } else {
                break;
            }
        }

        return res;
    }
}
