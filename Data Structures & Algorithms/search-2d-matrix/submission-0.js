class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let b = 0;
        let t = matrix.length - 1;

        while (b <= t) {
            const m = Math.floor((b + t) / 2);
            const n = matrix[m].length - 1;

            if (matrix[m][0] <= target && matrix[m][n] >= target) {
                let l = 0;
                let r = n;

                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    const num = matrix[m][mid];

                    if (num < target) {
                        l = mid + 1;
                    } else if (num > target) {
                        r = mid - 1;
                    } else {
                        return true;
                    }
                }

                break;
            } else if (matrix[m][0] > target) {
                t = m - 1;
            } else {
                b = m + 1;
            }
        }

        return false;
    }
}
