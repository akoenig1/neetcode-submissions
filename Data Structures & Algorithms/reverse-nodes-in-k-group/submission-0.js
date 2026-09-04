/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(0, head);
        let left = dummy;

        let count = 0;
        let curr = left;
        while (curr.next) {
            curr = curr.next;
            count++;

            if (count % k === 0) {
                const right = curr.next;
                this.reverse(left, right);

                const tail = left.next;
                left.next = curr;
                tail.next = right;
                left = tail;
                curr = tail;
            }
        }

        return dummy.next;
    }

    reverse(left, right) {
        let prev = left;
        let curr = left.next;
        while (curr !== right) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
    }
}
