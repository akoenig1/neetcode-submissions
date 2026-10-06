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
        let max = 0;
        const q = new Queue();
        q.enqueue([root, 1]);

        while (q.size() > 0) {
            const [node, depth] = q.dequeue();

            if (node) {
                max = Math.max(max, depth);
                q.enqueue([node.left, depth+1]);
                q.enqueue([node.right, depth+1]);
            }
        }

        return max;
    }
}
