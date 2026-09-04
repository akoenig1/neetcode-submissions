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
            const copy = oldToNew.get(curr);
            copy.next = oldToNew.get(curr.next);
            copy.random = oldToNew.get(curr.random);

            curr = curr.next;
        }

        return oldToNew.get(head);
    }
}
