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
        const earliestAvailable = new MinPriorityQueue();

        for (let i = 0; i < intervals.length; i++) {
            const meeting = intervals[i];
            if (!earliestAvailable.isEmpty() && earliestAvailable.front() <= meeting.start) {
                earliestAvailable.dequeue();
            }
            earliestAvailable.enqueue(meeting.end);
        }

        return earliestAvailable.size();
    }
}
