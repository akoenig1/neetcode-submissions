class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const res = [];
        const n = intervals.length;
        let i = 1;

        intervals = intervals.sort((a, b) => a[0] - b[0]);

        let merged = intervals[0];
        while (i < n) {
            let curr = intervals[i];

            if (curr[0] <= merged[1]) {
                merged[0] = Math.min(merged[0], curr[0]);
                merged[1] = Math.max(merged[1], curr[1]);
            } else {
                res.push(merged);
                merged = intervals[i];
            }

            i++;
        }
        res.push(merged);

        return res;
    }
}
