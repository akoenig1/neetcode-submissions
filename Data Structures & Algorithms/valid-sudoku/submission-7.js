class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const ROWS = board.length;
        const COLS = board[0].length;

        const colSets = Array.from(
            { length: COLS },
            () => new Set()
        );
        const boxSets = Array.from(
            { length: COLS },
            () => new Set()
        );

        for (let r = 0; r < ROWS; r++) {
            const rowSet = new Set();

            for (let c = 0; c < COLS; c++) {
                const digit = board[r][c];

                if (digit === '.') {
                    continue;
                }

                const colSet = colSets[c];
                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                const boxSet = boxSets[boxIndex];

                if (
                    rowSet.has(digit) ||
                    colSet.has(digit) ||
                    boxSet.has(digit)
                ) {
                    return false;
                }

                rowSet.add(digit);
                colSet.add(digit);
                boxSet.add(digit);
            }
        }

        return true;
    }
}
