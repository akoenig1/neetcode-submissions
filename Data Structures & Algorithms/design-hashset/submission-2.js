class ListNode {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class MyHashSet {
    constructor() {
        this.set = Array.from({ length: 10000 }, () => new ListNode(-1));
    }

    /**
     * @param {number} key
     * @return {number}
     */
    hash(key) {
        return key % 10000;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const index = this.hash(key);
        let curr = this.set[index];
        while (curr.next) {
            if (curr.next.key === key) return;
            curr = curr.next;
        }
        curr.next = new ListNode(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.hash(key);
        let curr = this.set[index];
        while (curr.next) {
            if (curr.next.key === key) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const index = this.hash(key);
        let curr = this.set[index];
        while (curr.next) {
            if (curr.next.key === key) return true;
            curr = curr.next;
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
