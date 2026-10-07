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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const queue = new Queue();
        queue.enqueue([p, q]);

        while(queue.size() > 0) {
            let levelSize = queue.size();
            for (let i = 0; i < levelSize; i++) {
                const [node1, node2] = queue.dequeue();

                if (!node1 && !node2) continue;
                if (!node1 || !node2) return false;
                if (node1.val !== node2.val) return false;

                queue.enqueue([node1.left, node2.left]);
                queue.enqueue([node1.right, node2.right]);
            }
        }

        return true;
    }
}
