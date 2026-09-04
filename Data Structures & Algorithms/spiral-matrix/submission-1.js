class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const res = [];
        
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let rb = COLS - 1;
        let bb = ROWS - 1;
        let lb = 0;
        let tb = 0;

        while (lb <= rb && tb <= bb) {
            // traverse right
            for (let c = lb; c <= rb; c++) {
                res.push(matrix[tb][c]);
            }
            tb++;

            // traverse down
            for (let r = tb; r <= bb; r++) {
                res.push(matrix[r][rb]);
            }
            rb--;

            if (!(lb <= rb && tb <= bb)) break;

            // traverse left
            for (let c = rb; c >= lb; c--) {
                res.push(matrix[bb][c]);
            }
            bb--;

            // traverse up
            for (let r = bb; r >= tb; r--) {
                res.push(matrix[r][lb]);
            }
            lb++;
        }

        return res;
    }
}
