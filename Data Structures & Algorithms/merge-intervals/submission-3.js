class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        
        const merged = [];
        const n = intervals.length;
        let newInterval = intervals[0];

        for (let i = 1; i < n; i++) {
            const currInterval = intervals[i];

            if (newInterval[1] < currInterval[0]) {
                merged.push(newInterval);
                newInterval = currInterval;
            } else if (currInterval[1] < newInterval[0]) {
                merged.push(currInterval);
            } else {
                newInterval[0] = Math.min(newInterval[0], currInterval[0]);
                newInterval[1] = Math.max(newInterval[1], currInterval[1]);
            }
        }
        merged.push(newInterval);

        return merged;
    }
}
