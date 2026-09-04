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
            const length = parseInt(str.substring(i, j), 10);
            i = j + 1;
            j = i + length;
            decoded.push(str.substring(i, j));
            i = j;
        }

        return decoded;
    }
}
