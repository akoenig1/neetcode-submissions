class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let t = 0;
        let b = matrix.length - 1;

        while (t <= b) {
            const mid = Math.floor((t + b) / 2);
            const row = matrix[mid];
            const n = row.length - 1;

            if (row[n] < target) {
                t = mid + 1;
            } else if (row[0] > target) {
                b = mid - 1;
            } else {
                let l = 0;
                let r = n;

                while (l <= r) {
                    const m = Math.floor((l + r) / 2);
                    const num = row[m];

                    if (num < target) {
                        l = m + 1;
                    } else if (num > target) {
                        r = m - 1;
                    } else {
                        return true;
                    }
                }

                break;
            }
        }

        return false;
    }
}
