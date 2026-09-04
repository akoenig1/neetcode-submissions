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
        let curr = head;
        let len = 0;

        while (curr) {
            len++;
            curr = curr.next;
        }

        const k = len - n;
        let i = 0;
        let prev = new ListNode();
        curr = head;

        if (k === 0) return curr.next;
        
        while (i < k) {
            prev = curr;
            curr = curr.next;
            i++;
        }

        prev.next = curr.next;

        return head;
    }
}
