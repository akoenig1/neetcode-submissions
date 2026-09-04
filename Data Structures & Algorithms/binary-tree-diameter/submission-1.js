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
    diameterOfBinaryTree(root) {
        let res = 0;

        const dfs = (node) => {
            if (!node) return 0;

            const heightLeft = dfs(node.left);
            const heightRight = dfs(node.right);
            const d = heightLeft + heightRight;

            res = Math.max(res, d);

            return 1 + Math.max(heightLeft, heightRight);
        }

        dfs(root);

        return res;
    }
}
