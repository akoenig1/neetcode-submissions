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
        let first = head;
        let second = head;

        // space pointers n nodes apart
        for (let i = 0; i < n; i++) {
            first = first.next;
        }

        // n = n, so remove first node
        if (!first) return head.next;

        // when first reaches last node of list, 
        // second is pointed at node that needs to skip next node
        while (first.next) {
            first = first.next;
            second = second.next;
        }

        second.next = second.next.next;

        return head;
    }
}
