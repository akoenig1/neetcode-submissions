class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        let removed = 0; 
        let prevEnd = intervals[0][1];  

        for (let i = 1; i < intervals.length; i++) {
            const [currStart, currEnd] = intervals[i];
            if (currStart < prevEnd) {
                removed++;
                prevEnd = Math.min(prevEnd, currEnd)
            } else {
                prevEnd = currEnd;
            }
        }

        return removed;
    }
}
