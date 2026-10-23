class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const merged = [];

        const overlaps = {};
        for (const [start, end] of intervals) {
            overlaps[start] = (overlaps[start] || 0) + 1;
            overlaps[end] = (overlaps[end] || 0) - 1;
        }

        const sortedKeys = Object
            .keys(overlaps)
            .sort((a, b) => a - b);
        let have = 0;
        let interval = [];

        for (const i of sortedKeys) {
            if (interval.length === 0) {
                interval.push(i);
            }

            have += overlaps[i];

            if (have === 0) {
                interval.push(i);
                merged.push(interval);
                interval = [];
            }
        }

        return merged;
    }
}
