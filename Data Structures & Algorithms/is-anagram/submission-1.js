class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        
        const sChars = createCharHash(s);
        const tChars = createCharHash(t);

        for (let c in sChars) {
            if (sChars[c] !== tChars[c]) return false;
        }

        return true;

        function createCharHash(str) {
            const chars = {};

            for (let c of str) {
                if (!chars[c]) chars[c] = 0;
                chars[c] += 1;
            }

            return chars;
        }
    }
}
