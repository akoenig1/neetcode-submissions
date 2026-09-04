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
     * @return {number[]}
     */
    rightSideView(root) {
        const res = [];
        const q = new Queue();
        q.enqueue(root);

        while (q.size() > 0) {
            let len = q.size();
            let rightSide = null;

            for (let i = 0; i < len; i++) {
                const node = q.dequeue();

                if (node) {
                    rightSide = node;
                    q.enqueue(node.left);
                    q.enqueue(node.right);
                }
            }

            if (rightSide) res.push(rightSide.val)
        }

        return res;
    }
}
