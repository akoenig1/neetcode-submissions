class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (const str of strs) {
            const counts = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++) {
                const idx = str.charCodeAt(i) - 'a'.charCodeAt(0);
                counts[idx]++;
            }
            if (!groups[counts]) groups[counts] = [];
            groups[counts].push(str);
        }

        return Object.values(groups);
    }
}
