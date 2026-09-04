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
    isValidBST(root, interval = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]) {
        if (!root) return true;
        const [lowerBound, upperBound] = interval;

        if (root.val <= lowerBound || root.val >= upperBound) return false;

        return this.isValidBST(root.left, [lowerBound, root.val]) 
                && this.isValidBST(root.right, [root.val, upperBound]);
    }
}
