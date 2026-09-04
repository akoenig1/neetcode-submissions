class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';

        for (const str of strs) {
            const len = str.length;
            encoded += `${len}#${str}`;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];

        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            
            const len = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + len;
            decoded.push(str.slice(i, j));
            i = j;
        }

        return decoded;
    }
}
