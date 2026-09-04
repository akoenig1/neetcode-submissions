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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;
        let temp = head?.next;

        while (curr !== null) {
            curr.next = prev;
            prev = curr;
            curr = temp;
            temp = temp?.next;
        }

        return prev;
    }
}
