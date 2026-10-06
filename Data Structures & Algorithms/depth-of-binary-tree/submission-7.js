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
     * @return {number}
     */
    maxDepth(root) {
        let max = 0;
        const stack = [[root, 1]];

        while (stack.length > 0) {
            const [node, depth] = stack.pop();

            if (node) {
                max = Math.max(max, depth);
                stack.push([node.left, depth+1]);
                stack.push([node.right, depth+1]);
            }
        }

        return max;
    }
}
