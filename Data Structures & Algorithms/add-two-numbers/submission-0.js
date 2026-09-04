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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let head = new ListNode();
        let curr = head;

        let carry = 0;
        while (l1 || l2 || carry) {
            const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
            const digit = sum % 10;
            carry = sum > 9 ? 1 : 0;
            
            curr.val = digit;

            l1 = l1?.next || null;
            l2 = l2?.next || null;
            if (l1 || l2 || carry) curr.next = new ListNode();
            curr = curr.next;
        }

        return head;
    }
}
