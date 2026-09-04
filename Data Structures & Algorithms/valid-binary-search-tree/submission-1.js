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
    isValidBST(root) {
        return this.dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }

    dfs(root, leftBound, rightBound) {
        if (!root) return true;

        return root.val < rightBound && root.val > leftBound
            && this.dfs(root.left, leftBound, root.val) 
            && this.dfs(root.right, root.val, rightBound);
    }
}
