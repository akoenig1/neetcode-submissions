class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';

        for (const str of strs) {
            encoded += str.length;
            encoded += '#';
            encoded += str;
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

            const strLen = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + strLen;

            const subStr = str.substring(i, j);
            decoded.push(subStr);
            i = j;
        }

        return decoded;
    }
}
