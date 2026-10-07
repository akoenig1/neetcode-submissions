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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const stack = [[p, q]];

        while (stack.length > 0) {
            const [curr1, curr2] = stack.pop();
            if (!curr1 && !curr2) continue;
            if (!curr1 || !curr2) return false;
            if (curr1.val !== curr2.val) return false;

            stack.push([curr1.left, curr2.left]);
            stack.push([curr1.right, curr2.right]);
        }

        return true;
    }
}
