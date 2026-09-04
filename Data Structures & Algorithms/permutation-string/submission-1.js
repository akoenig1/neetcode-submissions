class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        
        const s1Chars = new Array(26).fill(0);
        const s2Chars = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            const s1Index = s1.charCodeAt(i) - 'a'.charCodeAt(0);
            const s2Index = s2.charCodeAt(i) - 'a'.charCodeAt(0);
            s1Chars[s1Index]++;
            s2Chars[s2Index]++;
        }

        let l = 0;
        for (let i = s1.length; i < s2.length; i++) {
            if (s1Chars.join('') === s2Chars.join('')) return true;
            const rIndex = s2.charCodeAt(i) - 'a'.charCodeAt(0);
            s2Chars[rIndex]++;
            const lIndex = s2.charCodeAt(l) - 'a'.charCodeAt(0);
            s2Chars[lIndex]--;
            l++
        }

        return s1Chars.join('') === s2Chars.join('');
    }
}
