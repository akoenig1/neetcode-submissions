class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adjMap = new Map();
        for (let i = 0; i < n; i++) {
            adjMap.set(i, []);
        }
        for (const [u, v] of edges) {
            adjMap.get(u).push(v);
            adjMap.get(v).push(u);
        }

        const visited = new Set();
        const dfs = (node, parent) => {
            if (visited.has(node)) return false;

            visited.add(node);

            const neighbors = adjMap.get(node);
            for (const nei of neighbors) {
                if (nei !== parent) {
                    if (!dfs(nei, node)) return false;
                }
            }

            return true;
        }

        const valid = dfs(0, null);

        return valid && visited.size === n;
    }
}
