class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        const n = ROWS * COLS;

        let l = 0;
        let r = n - 1;
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            // row = number of complete cols passed
            const row = Math.floor(mid / COLS);
            // col = position in row
            const col = mid % COLS;
            const cell = matrix[row][col];

            if (cell < target) {
                l = mid + 1;
            } else if (cell > target) {
                r = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
