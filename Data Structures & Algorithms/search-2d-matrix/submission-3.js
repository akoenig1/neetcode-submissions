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
            const m = l + Math.floor((r - l) / 2);
            const row = Math.floor(m / COLS);
            const col = m % COLS;
            const num = matrix[row][col];

            if (num < target) {
                l = m + 1;
            } else if (num > target) {
                r = m - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
