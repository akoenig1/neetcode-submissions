class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [];

        let prev = intervals[0];
        for (let i = 1; i < intervals.length; i++) {
            const curr = intervals[i];
            if (curr[0] > prev[1]) {
                res.push(prev);
                prev = curr;
            } else {
                prev[1] = Math.max(prev[1], curr[1]);
            }
        }
        res.push(prev);

        return res;
    }
}
