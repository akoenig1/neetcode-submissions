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
        let length = 0;
        let curr = head;

        while (curr) {
            curr = curr.next;
            length++;
        }

        if (length - n === 0) return head.next;

        curr = head;
        let i = 1;
        while (i < length - n) {
            curr = curr.next;
            i++;
        }
        const next = curr.next.next;
        curr.next = next;

        return head;
    }
}
