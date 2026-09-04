class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let res = 0;
        
        const adjList = new Map();
        for (let i = 0; i < n; i++) {
            adjList.set(i, []);
        }
        for (const [v, w] of edges) {
            adjList.get(v).push(w);
            adjList.get(w).push(v);
        }

        const visited = new Set();
        const dfs = (node) => {
            if (visited.has(node)) return;

            visited.add(node);

            const neighbors = adjList.get(node);
            for (const nei of neighbors) {
                dfs(nei);
            }
        }

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                dfs(i);
                res++;
            }
        }

        return res;
    }
}
