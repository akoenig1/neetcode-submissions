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
        let pre_idx = 0;
        const indices = new Map();
        inorder.forEach((val, i) => indices.set(val, i));
        
        function build(inStart, inEnd) {
            // no elements in subarrays, return null
            if (inStart > inEnd) return null;

            // root is first element in preorder
            // every subsequent element of preorder is the next root
            // works whether we're processing the left or right subtree
            const root = new TreeNode(preorder[pre_idx++]);

            // find root index in inorder
            const i = indices.get(root.val);

            // build subtrees
            root.left = build(inStart, i-1);
            root.right = build(i+1, inEnd);
            return root;
        }

        return build(0, preorder.length - 1);
    }
}
