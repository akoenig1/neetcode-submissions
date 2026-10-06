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
    constructor(maxDiameter = 0) {
        this.maxDiameter = maxDiameter;
    }
    
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        this.height(root);
        return this.maxDiameter;
    }

    /**
     * @param {TreeNode} node
     * @return {number}
     */
    height(node) {
        if (!node) return 0;

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        
        const diameter = leftHeight + rightHeight;
        this.maxDiameter = Math.max(this.maxDiameter, diameter);

        return 1 + Math.max(
            leftHeight,
            rightHeight
        );
    }
}
