class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        this.prefixMatrix = Array.from(
            { length: ROWS + 1 },
            () => new Array(COLS + 1).fill(0)
        );

        for (let r = 1; r <= ROWS; r++) {
            let prefixSum = 0;
            for (let c = 1; c <= COLS; c++) {
                prefixSum += matrix[r-1][c-1];
                this.prefixMatrix[r][c] = prefixSum + this.prefixMatrix[r-1][c];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        row1++;
        col1++;
        row2++;
        col2++;

        const total = this.prefixMatrix[row2][col2];
        const top = this.prefixMatrix[row1-1][col2];
        const left = this.prefixMatrix[row2][col1-1];
        const topLeft = this.prefixMatrix[row1-1][col1-1];

        return total - top - left + topLeft; 
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
