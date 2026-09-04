class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const n = word1.length;
        const m = word2.length;
        
        let merged = '';
        let i = 0;
        let j = 0;

        while (i < n || j < m) {
            if (i < n) merged += word1[i++];
            if (j < m) merged += word2[j++];
        }

        return merged;
    }
}
