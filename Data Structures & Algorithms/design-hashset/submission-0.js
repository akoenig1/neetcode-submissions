class ListNode {
    constructor(key, next) {
        this.key = key;
        this.next = next;
    }
}

class MyHashSet {
    constructor() {
        this.set = Array.from(
            { length: 10000 },
            () => new ListNode(0)
        );
    }

    /**
     * @param {number} key
     * @return {number}
     */
    hash(key) {
        return key % this.set.length;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const index = this.hash(key);
        let curr = this.set[index];
        while (curr.next) {
            curr = curr.next;
            if (curr.key === key) return;
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
            curr = curr.next;
            if (curr.key === key) return true;
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
