// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const oldToNew = new Map();
        oldToNew.set(null, null);

        let curr = head;
        while (curr) {
            const newNode = new Node(curr.val);
            oldToNew.set(curr, newNode);
            curr = curr.next;
        }

        curr = head;
        while (curr) {
            const newNode = oldToNew.get(curr);
            const nextNode = oldToNew.get(curr.next);
            const randNode = oldToNew.get(curr.random);

            newNode.next = nextNode;
            newNode.random = randNode;
            
            curr = curr.next;
        }

        return oldToNew.get(head);
    }
}
