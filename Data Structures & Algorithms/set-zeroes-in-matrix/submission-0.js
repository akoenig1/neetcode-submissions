class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        let zeroRow = false;

        // use top row and left col to mark rows/cols with 0s
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (matrix[r][c] === 0) {
                    matrix[0][c] = 0;
                    // identify if row 0 has any 0s before we modify in place
                    if (r > 0) {
                        matrix[r][0] = 0;
                    } else {
                        zeroRow = true;
                    }
                    
                }
            }
        }

        // overwrite cells if col or row contains 0
        for (let r = 1; r < ROWS; r++) {
            for (let c = 1; c < COLS; c++) {
                if (matrix[0][c] === 0 || matrix[r][0] === 0) {
                    matrix[r][c] = 0;
                }
            }
        }

        // overwrite col 0 if 0, 0 is 0 (we didn't overwrite anything yet since overwrite loop starts at 1
        if (matrix[0][0] === 0) {
            for (let r = 0; r < ROWS; r++) {
                matrix[r][0] = 0;
            }
        }

        // overwrite row 0 if it had a 0
        if (zeroRow) {
            for (let c = 0; c < COLS; c++) {
                matrix[0][c] = 0;
            }
        }
    }
}
