class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        for (let str of strs) {
            const key = new Array(26).fill(0);

            for (let c of str) {
                const val = c.charCodeAt(0) - 'a'.charCodeAt(0);
                key[val]++;
            }

            if (!res[key]) res[key] = [];
            res[key].push(str);
        }

        return Object.values(res);
    }
}
