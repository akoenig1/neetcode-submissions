class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const grouped = {};

        for (let str of strs) {
            const key = new Array(26).fill(0);

            for (let c of str) {
                const i = c.charCodeAt(0) - 'a'.charCodeAt(0);
                key[i]++;
            }

            if (!grouped[key]) grouped[key] = [];
            grouped[key].push(str);
        }

        return Object.values(grouped);
    }
}
