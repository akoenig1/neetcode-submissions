class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 1) return strs[0];
        let prefix = '';

        let i = 0;
        while (true) {
            for (let j = 1; j < strs.length; j++) {
                if (
                    i >= strs[j].length ||
                    strs[j][i] !== strs[j-1][i]
                ) return prefix;
            }
            prefix += strs[0][i];
            i++;
        }
    }
}
