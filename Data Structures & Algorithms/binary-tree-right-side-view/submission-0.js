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
    rightSideView(root) {
        const res = [];
        const levels = [];
        if (!root) return res;

        let level = 0;
        let queue = [[root, level]];

        while (queue.length > 0) {
            const [curr, level] = queue.shift();

            if (!levels[level]) levels[level] = [];
            levels[level].push(curr.val);

            if (curr.left) queue.push([curr.left, level+1]);
            if (curr.right) queue.push([curr.right, level+1]);
        }

        console.log(levels);

        for (const level of levels) {
            const rightSide = level.pop();
            res.push(rightSide);
        }

        return res;
    }
}
