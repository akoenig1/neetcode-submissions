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
    constructor(balanced = true) {
        this.balanced = balanced;
    }

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        this.height(root);
        return this.balanced;
    }

    /**
     * @param {TreeNode} node
     * @return {number}
     */
    height(node) {
        if (!node) return 0;

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        if (
            Math.abs(leftHeight - rightHeight) > 1
        ) this.balanced = false;

        return 1 + Math.max(
            leftHeight,
            rightHeight
        );
    }
}
