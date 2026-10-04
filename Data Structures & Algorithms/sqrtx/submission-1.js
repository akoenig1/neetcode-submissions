class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l = 1;
        let r = x;

        while (l <= r) {
            const rootCandidate = Math.floor(l + ((r - l) / 2));
            const square = rootCandidate * rootCandidate;
            
            if (square < x) {
                l = rootCandidate + 1;
            } else if (square > x) {
                r = rootCandidate - 1;
            } else {
                return rootCandidate;
            }
        }

        return r;
    }
}
