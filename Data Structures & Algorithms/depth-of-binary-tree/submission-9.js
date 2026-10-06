/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        const q = new Queue();
        if (root) q.enqueue(root);

        let level = 0;
        while (q.size() > 0) {
            level++;

            const nodesInLevel = q.size();
            for (let i = 0; i < nodesInLevel; i++) {
                const node = q.dequeue();
                if (node.left) q.enqueue(node.left);
                if (node.right) q.enqueue(node.right);
            }
        }

        return level;
    }
}
