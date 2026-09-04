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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) { 
        this.count = k;
        return this.traverseInOrder(root);
    }

    traverseInOrder(node) {
        if (!node) return null;

        const leftResult = this.traverseInOrder(node.left);
        if (leftResult) return leftResult;

        this.count--;
        if (this.count === 0) return node.val;

        return this.traverseInOrder(node.right);
    }
}
