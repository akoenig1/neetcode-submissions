class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [];
        const n = intervals.length;
        let i = 0;

        while (i < n && intervals[i][1] < newInterval[0]) {
            res.push(intervals[i]);
            i++;
        }

        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
            newInterval[1] = Math.max(intervals[i][1], newInterval[1])
            i++;
        }
        res.push(newInterval);
        
        while (i < n) {
            res.push(intervals[i]);
            i++;
        }

        return res;
    }
}
