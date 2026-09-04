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
            const cS = s[i];
            const cT = t[i];
            sChars[cS] ? sChars[cS] += 1 : sChars[cS] = 1;
            tChars[cT] ? tChars[cT] += 1 : tChars[cT] = 1;
        }

        // compare hashmap values
        for (let key in sChars) {
            if (sChars[key] !== tChars[key]) return false;
        }

        return true;
    }
}
