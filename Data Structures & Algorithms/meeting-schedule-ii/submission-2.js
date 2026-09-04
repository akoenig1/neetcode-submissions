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
        intervals.sort((a, b) => a.start - b.start);
        const rooms = new MinPriorityQueue();

        for (const interval of intervals) {
            if (rooms.size() > 0 && interval.start >= rooms.front()) {
                rooms.pop()
            }
            rooms.push(interval.end);
        }

        return rooms.size();
    }
}
