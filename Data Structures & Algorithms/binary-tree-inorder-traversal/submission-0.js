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
     * @return {number[]}
     */
    inorderTraversal(root) {
        return this.dfs(root, []);
    }

    dfs(root, nodes) {
        if (!root) return nodes;

        if (root.left) {
            this.dfs(root.left, nodes);
        }
        nodes.push(root.val);
        if (root.right) {
            this.dfs(root.right, nodes);
        }
        
        return nodes;
    }
}
