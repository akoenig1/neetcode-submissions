class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {        
        const INF = Infinity;
        const routes = Array.from({ length: n }, () => []);
        const visited = Array.from({ length: n }, () => Array(k + 5).fill(INF));
        // visited[src][stops] = best price to this airport

        for (const [src, dest, price] of flights) {
            routes[src].push([dest, price]);
        }

        const pq = new MinPriorityQueue((entry) => entry[0]);
        pq.enqueue([0, src, -1]); // cost, node, stops

        while (!pq.isEmpty()) {
            const [currPrice, currSrc, currStops] = pq.dequeue();

            if (currSrc === dst) return currPrice;
            
            if (currStops === k || visited[currSrc][currStops + 1] < currPrice) continue;

            for (const [dest, price] of routes[currSrc]) {
                const nextPrice = price + currPrice;
                const nextStops = currStops + 1;
                if (visited[dest][nextStops + 1] > nextPrice) {
                    visited[dest][nextStops + 1] = nextPrice;
                    pq.enqueue([nextPrice, dest, nextStops]);
                }
            }
        }


        return -1;
    }
}
