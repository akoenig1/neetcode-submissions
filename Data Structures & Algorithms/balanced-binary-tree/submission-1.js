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
        const [depth, isBalanced] = this.dfs(root);
        return isBalanced;
    }

    dfs(root) {
        if (!root) return [0, true];
        
        const [ld, lb] = this.dfs(root.left);
        const [rd, rb] = this.dfs(root.right);
        const balanced = lb && rb && (Math.abs(ld - rd) <= 1)
        const height = 1 + Math.max(ld, rd);
        
        return [height, balanced];
    }
}
