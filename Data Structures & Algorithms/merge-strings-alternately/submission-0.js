class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let merged = '';
        let p1 = 0;
        let p2 = 0;
        while (p1 < word1.length && p2 < word2.length) {
            merged += word1[p1];
            merged += word2[p2];
            p1++;
            p2++;
        }

        while (p1 < word1.length) {
            merged += word1[p1];
            p1++;
        }

        while (p2 < word2.length) {
            merged += word2[p2];
            p2++;
        }

        return merged;
    }
}
