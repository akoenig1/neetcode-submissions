class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let res = "";

        if (s.length < t.length) return res;
        
        const sCounts = {};
        const tCounts = {};
        for (const c of t) {
            tCounts[c] = (tCounts[c] || 0) + 1;
            sCounts[c] = 0;
        }

        let matches = 0;
        const matchesNeeded = Object.keys(tCounts).length;

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            if (tCounts[c]) {
                sCounts[c]++;
                if (sCounts[c] === tCounts[c]) matches++;
            }

            while (matches === matchesNeeded) {
                if (res.length === 0 || r - l < res.length) {
                    res = s.substring(l, r + 1);
                }

                const c = s[l];
                if (tCounts[c]) sCounts[c]--;
                if (sCounts[c] < tCounts[c]) matches--;
                
                l++;
            }
        }

        return res;
    }
}
