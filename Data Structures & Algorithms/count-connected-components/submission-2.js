class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let count = 0;
        
        const adj = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visited = new Set();

        const dfs = (node) => {
            for (const nei of adj[node]) {
                if (!visited.has(nei)) {
                    visited.add(nei);
                    dfs(nei, node);
                }
            }
        }

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                visited.add(i);
                dfs(i);
                count++;
            }
        }

        return count;
    }
}
