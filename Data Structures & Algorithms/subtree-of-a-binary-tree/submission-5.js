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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) return true;
        if (!root) return false;

        if (this.isSameTree(root, subRoot)) {
            return true;
        }

        return this.isSubtree(root.left, subRoot)
            || this.isSubtree(root.right, subRoot);
    }

    isSameTree(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        if (node1.val !== node2.val) return false;

        return this.isSameTree(node1.left, node2.left)
            && this.isSameTree(node1.right, node2.right);
    }
}
