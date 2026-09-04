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
        const range = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];

        const dfs = (node, range) => {
            if (!node) return true;
            
            const [lowerBound, upperBound] = range;
            
            return  node.val < upperBound &&
                    node.val > lowerBound &&
                    dfs(node.left, [lowerBound, node.val]) && 
                    dfs(node.right, [node.val, upperBound]);
        }

        return dfs(root, range)
    }
}
