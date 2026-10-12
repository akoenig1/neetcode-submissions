class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        const transposed = Array.from({ length: COLS }, () => new Array(ROWS));

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                transposed[c][r] = matrix[r][c];
            }
        }

        return transposed;
    }
}
