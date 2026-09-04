class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l = 0;
        let r = x;

        while (l <= r) {
            const mid = Math.floor(l + (r - l) / 2);
            const res = mid * mid;

            if (res < x) {
                l = mid + 1;
            } else if (res > x) {
                r = mid - 1;
            } else {
                return mid;
            }
        }

        return r;
    }
}
