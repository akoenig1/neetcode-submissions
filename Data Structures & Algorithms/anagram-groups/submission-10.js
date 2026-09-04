class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const wordsWithCount = {};
        for (const str of strs) {
            const charCount = new Array(26).fill(0);
            for (const c of str) {
                const i = c.charCodeAt(0) - 'a'.charCodeAt(0);
                charCount[i]++;
            }
            if (!wordsWithCount[charCount]) wordsWithCount[charCount] = [];
            wordsWithCount[charCount].push(str);
        }

        return Object.values(wordsWithCount);
    }
}
