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
    postorderTraversal(root) {
        const postorderNodes = [];
        const stack = [];
        let curr = root;

        while (curr || stack.length > 0) {
            if (curr) {
                postorderNodes.push(curr.val);
                stack.push(curr.left);
                stack.push(curr.right);
            }
            curr = stack.pop();
        }

        return postorderNodes.reverse();
    }

    postorderTraversalRecursive(root) {
        const postorderNodes = [];

        const postorderDFS = (currentNode) => {
            if (!currentNode) return;

            postorderDFS(currentNode.left);
            postorderDFS(currentNode.right);
            postorderNodes.push(currentNode.val);
        }

        postorderDFS(root);

        return postorderNodes;
    }
}
