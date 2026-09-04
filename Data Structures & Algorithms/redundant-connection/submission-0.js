class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
        const parent = new Array(n+1).fill(0).map((_, i) => i);
        const rank = new Array(n+1).fill(1);

        const find = (n) => {
            let p = parent[n];
            while (p !== parent[p]) {
                p = parent[parent[p]];
            }
            return parent[p];
        }

        const union = (u, v) => {
            const p1 = find(u);
            const p2 = find(v);

            if (p1 === p2) return false;

            if (rank[p1] > rank[p2]) {
                parent[p2] = p1;
                rank[p1] += rank[p2];
            } else {
                parent[p1] = p2;
                rank[p2] += rank[p1];
            }

            return true;
        }

        for (const [u, v] of edges) {
            if (!union(u, v)) return [u, v];
        }

        return [];
    }
}
