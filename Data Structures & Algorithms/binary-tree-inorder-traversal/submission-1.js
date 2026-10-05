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
        const inorderNodes = [];
        const stack = [];
        let curr = root;

        while (curr || stack.length > 0) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop();
            inorderNodes.push(curr.val);
            curr = curr.right;
        }

        return inorderNodes;
    }

    inorderTraversalRecursive(root) {
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
