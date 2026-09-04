class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let merged = '';
        const n = word1.length;
        const m = word2.length;
        let i = 0;
        let j = 0;

        while (i < n && j < m) {
            merged += word1.slice(i, i+1);
            merged += word2.slice(j, j+1);
            i++;
            j++;
        }

        if (i < n) merged += word1.slice(i);
        if (j < m) merged += word2.slice(j);

        return merged;
    }
}
