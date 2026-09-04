class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        let res = 0;

        let prev = intervals[0];
        for (let i = 1; i < intervals.length; i++) {
            const curr = intervals[i];
            if (curr[0] < prev[1]) {
                res++;
                prev[1] = Math.min(prev[1], curr[1]);
            } else {
                prev = curr;
            }
        }

        return res;
    }
}
