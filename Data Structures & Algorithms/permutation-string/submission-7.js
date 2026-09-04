class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false;

        let chars1 = new Array(26).fill(0);
        let chars2 = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            const i1 = s1[i].charCodeAt(0) - 'a'.charCodeAt(0);
            const i2 = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
            chars1[i1]++;
            chars2[i2]++;
        }
        if (chars1.join('') === chars2.join('')) return true;

        for (let r = s1.length; r < s2.length; r++) {
            const ir = s2[r].charCodeAt(0) - 'a'.charCodeAt(0);
            const il = s2[r-s1.length].charCodeAt(0) - 'a'.charCodeAt(0);
            chars2[ir]++;
            chars2[il]--;

            if (chars1.join('') === chars2.join('')) return true;
        }

        return false;
    }
}
