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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;
        if (lists.length === 1) return lists[0];

        const mid = Math.floor(lists.length / 2);
        const firstHalf = lists.slice(0, mid);
        const secondHalf = lists.slice(mid, lists.length + 1);
        const mergedFirst = this.mergeKLists(firstHalf);
        const mergedSecond = this.mergeKLists(secondHalf);
        return this.mergeTwoLists(mergedFirst, mergedSecond);
    }

    mergeTwoLists(l1, l2) {
        const dummy = new ListNode();
        let curr = dummy;

        while (l1 && l2) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }

        if (l1) curr.next = l1;
        if (l2) curr.next = l2;

        return dummy.next;
    }
}
