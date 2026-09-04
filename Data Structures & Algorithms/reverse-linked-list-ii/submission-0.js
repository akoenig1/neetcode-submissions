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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let dummy = new ListNode(0, head);
        let prev = dummy;
        let curr = head;

        let i = 1;
        while (i < left) {
            prev = prev.next;
            curr = curr.next;
            i++;
        }

        const leftSentinel = prev;
        const tail = curr;

        prev = null;
        while (i <= right) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
            i++;
        }

        leftSentinel.next = prev;
        tail.next = curr;

        return dummy.next;
    }
}
