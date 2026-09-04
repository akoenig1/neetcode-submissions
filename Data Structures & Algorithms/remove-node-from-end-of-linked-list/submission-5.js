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
        let dummy = new ListNode(0, head);

        // space out 2 pointers by n
        let end = dummy;
        let nthFromEnd = dummy;
        while (n >= 0) {
            end = end.next;
            n--;
        }

        // navigate until end pointer is null
        while (end) {
            end = end.next;
            nthFromEnd = nthFromEnd.next;
        }

        // remove nth node from end
        nthFromEnd.next = nthFromEnd.next.next;
        
        return dummy.next;
    }
}
