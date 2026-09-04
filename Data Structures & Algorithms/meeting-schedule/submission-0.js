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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        let freeAfter = 0;

        for (const interval of intervals) {
            if (interval.start < freeAfter) return false;
            freeAfter = Math.max(freeAfter, interval.end);
        }

        return true;
    }
}
