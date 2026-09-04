class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        
        let zeroFirstRow = false;
        let zeroFirstCol = false;

        for (let r = 0; r < ROWS; r++) {
            if (matrix[r][0] === 0) zeroFirstCol = true;
        }

        for (let c = 0; c < COLS; c++) {
            if (matrix[0][c] === 0) zeroFirstRow = true;
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (matrix[r][c] === 0) {
                    matrix[r][0] = 0;
                    matrix[0][c] = 0;
                }
            }
        }

        for (let r = 1; r < ROWS; r++) {
            for (let c = 1; c < COLS; c++) {
                if (
                    matrix[r][0] === 0 ||
                    matrix[0][c] === 0
                ) matrix[r][c] = 0;
            }
        }

        if (zeroFirstCol) {
            for (let r = 0; r < ROWS; r++) {
                matrix[r][0] = 0;
            }
        }

        if (zeroFirstRow) {
            for (let c = 0; c < COLS; c++) {
                matrix[0][c] = 0;
            }
        }
    }
}
