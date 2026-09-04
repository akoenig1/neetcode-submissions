class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        const n = intervals.length;
        let res = 0;
        let i = 1;

        intervals = intervals.sort((a, b) => a[0] - b[0]);

        let prev = intervals[0];
        while (i < n) {
            let curr = intervals[i];
            if (curr[0] < prev[1]) {
                prev[1] = Math.min(prev[1], curr[1]);
                res++;
            } else {
                prev = curr;
            }
            i++;
        }

        return res;
    }
}
