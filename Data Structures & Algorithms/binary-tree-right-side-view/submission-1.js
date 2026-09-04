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
        const queue = new Queue();

        queue.push(root);

        while (queue.size() > 0) {
            let rightSide = null;
            let length = queue.size();

            for (let i = 0; i < length; i++) {
                const node = queue.pop();
                if (node) {
                    rightSide = node;
                    queue.push(node.left);
                    queue.push(node.right);
                }
            }

            if (rightSide) res.push(rightSide.val);
        }

        return res;
    }
}
