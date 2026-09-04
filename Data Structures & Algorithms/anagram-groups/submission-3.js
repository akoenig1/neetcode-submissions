class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        for (const str of strs) {
            const charCounts = new Array(26).fill(0);

            for (const c of str) {
                const charCode = c.charCodeAt(0) - 'a'.charCodeAt(0);                
                charCounts[charCode] += 1 || 0;
            }

            if (!res[charCounts]) res[charCounts] = [];
            res[charCounts].push(str);
        }

        return Object.values(res);
    }
}
