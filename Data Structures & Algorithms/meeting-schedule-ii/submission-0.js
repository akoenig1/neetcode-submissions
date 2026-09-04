/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const starts = intervals.map((i) => i.start).sort((a, b) => a - b);
        const ends = intervals.map((i) => i.end).sort((a, b) => a - b);
        let s = 0;
        let e = 0;
        let count = 0;
        let res = 0;

        while (s < intervals.length) {
            if (starts[s] < ends[e]) {
                count++;
                s++;
            } else {
                count--;
                e++;
            }
            res = Math.max(res, count);
        }

        return res;
    }
}
