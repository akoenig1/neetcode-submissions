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

        for (let i = 0; i < n; i++) {
            first = first.next;
        }

        if (!first) return head.next;

        while (first.next) {
            first = first.next;
            second = second.next;
        }

        second.next = second.next.next;

        return head;
    }
}
