class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const q = new MaxPriorityQueue((pair) => pair.distance);

        for (const point of points) {
            const distance = Math.sqrt(point[0]**2 + point[1]**2);
            q.push({distance, point});
            if (q.size() > k) q.dequeue();
        }

        const res = [];
        for (const pair of q) {
            res.push(pair.point);
        } 
        return res;
    }
}
