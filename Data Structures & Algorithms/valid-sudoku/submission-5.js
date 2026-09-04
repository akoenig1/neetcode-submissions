class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const colSets = new Array(9).fill(0).map(() => new Set());
        const boxSets = new Array(9).fill(0).map(() => new Set());

        for (let r = 0; r < 9; r++) {
            const rowSet = new Set();

            for (let c = 0; c < 9; c++) {
                const cell = board[r][c];
                if (cell === '.') continue;

                const boxIndex = (Math.floor(r / 3) * 3) + Math.floor(c / 3);

                if (
                    rowSet.has(cell) ||
                    colSets[c].has(cell) ||
                    boxSets[boxIndex].has(cell)
                ) return false;
                
                rowSet.add(cell);
                colSets[c].add(cell);
                boxSets[boxIndex].add(cell);
            }
        }

        return true;
    }
}
