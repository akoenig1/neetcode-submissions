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
    constructor() {
        this.max = 0;
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        this.maxDepth(root);
        return this.max;
    }

    maxDepth(root) {
        if (!root) return 0;

        const leftDepth = this.maxDepth(root.left);
        const rightDepth = this.maxDepth(root.right);
        const diameter = leftDepth + rightDepth;
        this.max = Math.max(this.max, diameter);

        return 1 + Math.max(leftDepth, rightDepth);
    }
}
