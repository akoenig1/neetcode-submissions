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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];
        const q = new Queue();
        q.enqueue([root, 0]);

        while (q.size() > 0) {
            const [node, level] = q.dequeue();
            if (!node) continue;

            if (!res[level]) res[level] = [];
            res[level].push(node.val);

            q.enqueue([node.left, level + 1]);
            q.enqueue([node.right, level + 1]);
        }

        return res;
    }
}
