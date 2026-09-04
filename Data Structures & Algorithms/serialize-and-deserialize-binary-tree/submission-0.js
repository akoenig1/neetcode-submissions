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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const preorderEncode = (node) => {
            if (!node) return '#,';
            const val = node.val.toString();
            return `${val},` + preorderEncode(node.left) + preorderEncode(node.right);
        }

        // remove trailing delimiter
        return preorderEncode(root).slice(0, -1);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const vals = data.split(',');
        let i = 0;

        const preorderBuild = () => {
            if (vals[i] === '#') {
                i++;
                return null;
            }

            const node = new TreeNode(parseInt(vals[i]));
            i++;
            node.left = preorderBuild();
            node.right = preorderBuild();
            return node;
        }

        return preorderBuild();
    }
}
