/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;
        const clones = new Map();

        const dfs = (node) => {
            if (clones.has(node)) return clones.get(node);

            const clone = new Node(node.val);
            clones.set(node, clone);
            for (const nei of node.neighbors) {
                clone.neighbors.push(dfs(nei));
            }

            return clone;
        }

        return dfs(node);
    }
}
