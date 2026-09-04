class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        const charsInMap = {};
        let mostFreq = 0;

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            
            if (!charsInMap[c]) charsInMap[c] = 0;
            charsInMap[c]++;

            if (charsInMap[c] > mostFreq) mostFreq = charsInMap[c];

            if ((r - l + 1 - mostFreq) > k) {
                charsInMap[s[l]]--;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
