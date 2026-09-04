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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inorderMap = {};
        for (let i = 0; i < inorder.length; i++) {
            const val = inorder[i];
            inorderMap[val] = i;
        }
        let p_idx = 0;

        const dfs = (l, r) => {
            if (l > r) return null;
            const root = new TreeNode(preorder[p_idx++]);
            const rootIndex = inorderMap[root.val];

            root.left = dfs(l, rootIndex - 1);
            root.right = dfs(rootIndex + 1, r);
            return root;
        }

        return dfs(0, inorder.length - 1);
    }
}
