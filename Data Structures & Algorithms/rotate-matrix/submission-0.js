class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        matrix.reverse();

        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < r; c++) {
                [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
            }
        }
    }
}
