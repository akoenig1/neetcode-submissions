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

        const dfs = (root) => {
            if (!root) return 0;

            const leftResult = dfs(root.left);
            const rightResult = dfs(root.right);

            // consider if the path through root (rather than up) is max
            const localPathSum = root.val + leftResult + rightResult;
            max = Math.max(max, localPathSum);

            // path from parent can only traverse down right or left side, not both
            // include 0 incase both paths are negative
            return Math.max(leftResult + root.val, rightResult + root.val, 0);
        }

        dfs(root);

        return max;
    }
}
