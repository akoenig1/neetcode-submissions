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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];
        if (!root) return res;

        const q = [];
        q.push([root, 0]);

        while (q.length > 0) {
            const [curr, level] = q.shift();

            if (!res[level]) res[level] = [];
            res[level].push(curr.val);

            if (curr.left) q.push([curr.left, level + 1]);
            if (curr.right) q.push([curr.right, level + 1]);
        }

        return res;
    }
}
