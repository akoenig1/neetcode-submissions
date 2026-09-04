class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        for (let str of strs) {
            const chars = new Array(26).fill(0);

            for (let c of str) {
                const val = c.charCodeAt(0) - "a".charCodeAt(0);
                chars[val]++;
            }

            if (!res[chars]) res[chars] = [];

            res[chars].push(str);
        }

        return Object.values(res);
    }
}
