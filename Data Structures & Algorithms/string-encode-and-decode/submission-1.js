class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';

        for (let str of strs) {
            const length = str.length;
            encoded += `${length}#${str}`;
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

            const length = parseInt(str.substring(i, j));
            
            i = j + 1;
            j = i + length;

            const decodedStr = str.substring(i, j);
            decoded.push(decodedStr);

            i = j;
        }

        return decoded;
    }
}
