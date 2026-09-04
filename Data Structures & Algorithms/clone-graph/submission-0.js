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
    // cloneGraph(node) {
    //     if (!node) return null;

    //     const oldToNew = new Map();
    //     const stack = [node];
    //     oldToNew.set(node, new Node(node.val));

    //     while (stack.length) {
    //         const curr = stack.pop();
    //         const clone = oldToNew.get(curr);

    //         for (const neighbor of curr.neighbors) {
    //             if (!oldToNew.has(neighbor)) {
    //                 oldToNew.set(neighbor, new Node(neighbor.val));
    //                 stack.push(neighbor);
    //             }
    //             clone.neighbors.push(oldToNew.get(neighbor))
    //         }
    //     }

    //     return oldToNew.get(node);
    // }

    cloneGraph(node) {
        const oldToNew = new Map();
        return this.dfs(node, oldToNew);
    }

    dfs(node, oldToNew) {
        if (!node) return null;
        if (oldToNew.has(node)) return oldToNew.get(node);

        const copy = new Node(node.val);
        oldToNew.set(node, copy);

        for (const neighbor of node.neighbors) {
            copy.neighbors.push(this.dfs(neighbor, oldToNew));
        }

        return copy;
    }
}
