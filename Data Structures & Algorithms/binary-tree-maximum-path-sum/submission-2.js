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
    maxPathSum(root) {
        let max = root.val;

        const dfs = (node) => {
            if (!node) return 0;

            const leftSum = dfs(node.left);
            const rightSum = dfs(node.right);
            const localSum = node.val + leftSum + rightSum;
            max = Math.max(max, localSum);

            // don't pass negative sums up
            return Math.max(
                node.val + leftSum,
                node.val + rightSum,
                0
            );
        }

        dfs(root);
        return max;
    }
}
