class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        const n = arr.length;
        let l = 0;
        let r = n - 1;

        while (l < r) {
            const m = Math.floor(l + (r - l) / 2);
            if (arr[m] < x) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        l = l - 1;
        r = l + 1;
        while (r - l - 1 < k) {
            if (l < 0) {
                r++;
            } else if (r >= n) {
                l--;
            } else if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
                l--;
            } else {
                r++;
            }
        }

        return arr.slice(l + 1, r);
    }
}
