class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let rb = COLS - 1;
        let bb = ROWS - 1;
        let lb = 0;
        let tb = 0;

        const res = [];
        let r = 0;
        let c = 0;

        while (true) {
            // traverse right
            while (c <= rb) {
                res.push(matrix[tb][c]);
                c++;
            }
            tb++;
            r = tb;
            c = rb;
            if (r > bb) break;

            // traverse down
            while (r <= bb) {
                res.push(matrix[r][rb]);
                r++;
            }
            rb--;
            r = bb;
            c = rb;
            if (c < lb) break;

            // traverse left
            while (c >= lb) {
                res.push(matrix[bb][c]);
                c--;
            }
            bb--;
            r = bb;
            c = lb;
            if (r < tb) break;

            // traverse up
            while (r >= tb) {
                res.push(matrix[r][lb]);
                r--;
            }
            lb++;
            r = tb;
            c = lb;
            if (c > rb) break;
        }

        return res;
    }
}
