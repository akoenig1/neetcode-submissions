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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {        
        const dummy = new ListNode(0, head);
        let left = dummy;
        let right = head;

        // space out pointer by n
        for (let i = 0; i < n; i++) {
            right = right.next;
        }

        // when right reaches end, left.next will be nth node from end
        while (right) {
            left = left.next;
            right = right.next;
        }

        // skip over nth node from end
        left.next = left.next.next;
        return dummy.next;
    }
}
