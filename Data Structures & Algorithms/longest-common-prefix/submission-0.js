class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let lcp = strs[0];

        for (let i = 1; i < strs.length; i++) {
            const str = strs[i];
            for (let j = 0; j < lcp.length; j++) {
                if (j > str.length || lcp[j] !== str[j]) {
                    lcp = lcp.slice(0, j);
                }
            }
        }

        return lcp;
    }
}
