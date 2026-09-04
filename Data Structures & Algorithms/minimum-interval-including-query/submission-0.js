class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        const output = new Map();
        const minHeap = new MinPriorityQueue(entry => entry[0]);

        // sort intervals and queries
        intervals.sort((a, b) => a[0] - b[0]);
        const sortedQueries = [...queries].sort((a, b) => a - b);

        let i = 0;
        for (const q of sortedQueries) {
            // add to heap while start <= q
            while (i < intervals.length && intervals[i][0] <= q) {
                const [l, r] = intervals[i];
                minHeap.push([r - l + 1, r]);
                i++;
            }

            // pop from heap while q < end
            while (!minHeap.isEmpty() && minHeap.front()[1] < q) {
                minHeap.pop();
            }

            const res = minHeap.isEmpty() ? -1 : minHeap.front()[0];
            output.set(q, res);
        }

        return queries.map(q => output.get(q));
    }
}
