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
     * @return {boolean}
     */
    isBalanced(root) {
        let balanced = true;

        const dfs = (node) => {
            if (!node) return 0;

            const heightLeft = dfs(node.left);
            const heightRight = dfs(node.right);
            if (Math.abs(heightLeft - heightRight) > 1) balanced = false;

            return 1 + Math.max(heightLeft, heightRight);
        }

        dfs(root);

        return balanced;
    }
}
