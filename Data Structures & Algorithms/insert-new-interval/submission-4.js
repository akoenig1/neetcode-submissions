class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const merged = [];

        let newStart = newInterval[0];
        let newEnd = newInterval[1];
        let inserted = false;
        let i = 0;
        while (i < intervals.length) {
            const [start, end] = intervals[i];
            
            if (inserted || end < newStart) {
                merged.push([start, end]);
                i++;
            } else if (newEnd < start) {
                merged.push([newStart, newEnd]);
                inserted = true;
            } else {
                newStart = Math.min(start, newStart);
                newEnd = Math.max(end, newEnd);
                i++;
            }
        }

        if (!inserted) merged.push([newStart, newEnd]);

        return merged;
    }
}
