class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adj = {};
        for (let i = 1; i <= n; i++) {
            adj[i] = [];
        }
        for (const [u, v, t] of times) {
            adj[u].push([v, t]);
        }

        const visited = new Set();
        const pq = new MinPriorityQueue(x => x[1]);
        pq.enqueue([k, 0]);
        let time = 0;

        while (!pq.isEmpty()) {
            const [u, t] = pq.dequeue();
            if (visited.has(u)) continue;
            visited.add(u);
            time = t;

            for (const [vi, ti] of adj[u]) {
                if (!visited.has(vi)) {
                    pq.enqueue([vi, t + ti]);
                }
            }
        }

        return visited.size === n ? time : -1;
    }
}
