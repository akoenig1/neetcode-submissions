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
        let list = this.set[index];
        while (list.next) {
            if (list.next.key === key) return;
            list = list.next;
        }
        list.next = new ListNode(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.hash(key);
        let list = this.set[index];
        while (list.next) {
            if (list.next.key === key) {
                list.next = list.next.next;
                return;
            }
            list = list.next;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const index = this.hash(key);
        let list = this.set[index];
        while (list.next) {
            if (list.next.key === key) return true;
            list = list.next;
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
