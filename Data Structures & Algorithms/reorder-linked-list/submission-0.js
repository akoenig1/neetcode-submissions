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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;

        // find middle of list
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse second half of list;
        let temp = null;
        while (slow) {
            const next = slow.next;
            slow.next = temp;
            temp = slow;
            slow = next;
        }

        let l1 = head;
        let l2 = temp;

        // combine lists by alternating
        while (l1 && l2) {
            const temp1 = l1.next;
            const temp2 = l2.next;
            l1.next = l2;
            l2.next = temp1;
            l1 = temp1;
            l2 = temp2;
        }
    }
}
