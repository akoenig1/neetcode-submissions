class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (const str of strs) {
            const counts = Array(26).fill(0);

            for (const c of str) {
                const i = c.charCodeAt(0) - 'a'.charCodeAt(0);
                counts[i]++;
            }

            if (!groups[counts]) groups[counts] = [];
            groups[counts].push(str);
        }

        return Object.values(groups);
    }
}
