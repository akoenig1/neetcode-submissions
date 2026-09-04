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
        let res = 0;
        if (!root) return res;

        const q = new Queue();
        q.enqueue([root, 1])

        while (q.size() > 0) {
            const [curr, level] = q.dequeue();
            res = Math.max(res, level);
            if (curr.left) q.enqueue([curr.left, level + 1]); 
            if (curr.right) q.enqueue([curr.right, level + 1]);
        }

        return res;
    }
}
