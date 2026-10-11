class Solution {
    /**
     * @param {number} columnNumber
     * @return {string}
     */
    convertToTitle(columnNumber) {
        let columnTitle = '';
        const baseCharCode = 'A'.charCodeAt(0);

        while (columnNumber > 0) {
            // Excel columns are 1-indexed, but base conversion assumes 0-indexing
            columnNumber -= 1;

            const digit = columnNumber % 26;
            const char = String.fromCharCode(baseCharCode + digit);
            columnTitle = char + columnTitle;

            columnNumber = Math.floor(columnNumber / 26);
        }

        return columnTitle;
    }
}
