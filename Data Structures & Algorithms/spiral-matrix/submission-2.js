class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const res = [];
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let top = 0;
        let bottom = ROWS - 1;
        let left = 0;
        let right = COLS - 1;

        while (left <= right && top <= bottom) {
            // traverse right
            for (let c = left; c <= right; c++) {
                res.push(matrix[top][c]);
            }
            top++;

            // traverse down
            for (let r = top; r <= bottom; r++) {
                res.push(matrix[r][right]);
            }
            right--;

            if (!(left <= right && top <= bottom)) break;

            // traverse left
            for (let c = right; c >= left; c--) {
                res.push(matrix[bottom][c]);
            }
            bottom--;

            // traverse up
            for (let r = bottom; r >= top; r--) {
                res.push(matrix[r][left]);
            }
            left++;
        }

        return res;
    }
}
