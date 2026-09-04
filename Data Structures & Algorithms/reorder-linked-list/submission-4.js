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
        // find middle
        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse second half
        let prev = null;
        let curr = slow.next;
        slow.next = null;
        while (curr) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        // merge
        let front = head;
        let back = prev;
        while (back) {
            const tempFront = front.next;
            const tempBack = back.next;
            front.next = back;
            back.next = tempFront;
            front = tempFront;
            back = tempBack;
        }
    }
}
