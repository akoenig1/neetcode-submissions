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
        let rooms = 0;
        
        const meetingCounts = {};
        for (const { start, end } of intervals) {
            meetingCounts[start] = (meetingCounts[start] || 0) + 1;
            meetingCounts[end] = (meetingCounts[end] || 0) - 1;
        }

        const times = Object
            .keys(meetingCounts)
            .sort((a, b) => a - b);

        let overlaps = 0;
        for (const time of times) {
            overlaps += meetingCounts[time];
            rooms = Math.max(rooms, overlaps);
        }

        return rooms;
    }
}
