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
        // first element of preorder is the root
        // find the root in inorder - hash map to have constant time lookups
        // left of that is left subtree, right is right subtree
        // increment through preorder - building tree in preorder so each subsequent 
        // val is the next root
        // build recursively - base case: l > r
        const inorderMap = {};
        for (let i = 0; i < inorder.length; i++) {
            const val = inorder[i];
            inorderMap[val] = i;
        }

        let p_idx = 0;

        const buildTree = (l, r) => {
            if (l > r) return null;
            const root = new TreeNode(preorder[p_idx++]);
            const rootIndex = inorderMap[root.val];

            root.left = buildTree(l, rootIndex - 1);
            root.right = buildTree(rootIndex + 1, r);
            return root;
        }

        return buildTree(0, inorder.length - 1);
    }
}
