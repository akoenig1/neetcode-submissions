class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visited = new Set();

        const dfs = (node, parent) => {
            visited.add(node);
            
            const neighbors = adj[node];
            for (const nei of neighbors) {
                if (nei === parent || visited.has(nei)) continue;
                visited.add(nei);
                dfs(nei, node);
            }

            return;
        }

        let count = 0;
        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                count++;
                dfs(i, -1);
            }
        }

        return count;
    }
}
