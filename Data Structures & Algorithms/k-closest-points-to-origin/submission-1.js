class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const pq = new MaxPriorityQueue(x => x[1]);

        for (const [x, y] of points) {
            const distance = (x * x) + (y * y);
            pq.enqueue([[x, y], distance]);
            if (pq.size() > k) pq.dequeue();
        }

        return pq.toArray().map(x => x[0]);
    }
}
