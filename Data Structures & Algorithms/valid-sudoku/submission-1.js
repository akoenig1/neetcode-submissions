class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const colSets = new Array(9).fill(0).map(() => new Set());
        const boxSets = new Array(9).fill(0).map(() => new Set());

        for (let row = 0; row < board.length; row++) {
            const rowSet = new Set();

            for (let col = 0; col < board[row].length; col++) {
                const num = board[row][col];

                if (num === '.') continue;

                const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                const colSet = colSets[col];
                const boxSet = boxSets[boxIndex];

                if (rowSet.has(num) || colSet.has(num) || boxSet.has(num)) return false;

                rowSet.add(num);
                colSet.add(num);
                boxSet.add(num);
            }
        }

        return true;
    }
}
