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
        let prevEndTime = -1;

        for (const interval of intervals) {
            if (interval.start < prevEndTime) {
                return false;
            }
            
            prevEndTime = interval.end;
        }

        return true;
    }
}
