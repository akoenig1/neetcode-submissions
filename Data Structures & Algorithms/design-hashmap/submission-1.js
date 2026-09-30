class ListNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
    }
}

class MyHashMap {
    constructor() {
        this.map = Array.from({ length: 10000 }, () => new ListNode(-1, -1));
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
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const index = this.hash(key);
        let curr = this.map[index];
        while (curr.next) {
            if (curr.next.key === key) {
                curr.next.val = value;
                return;
            }
            curr = curr.next;
        }
        curr.next = new ListNode(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const index = this.hash(key);
        let curr = this.map[index];
        while (curr.next) {
            if (curr.next.key === key) {
                return curr.next.val;
            }
            curr = curr.next;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.hash(key);
        let curr = this.map[index];
        while (curr.next) {
            if (curr.next.key === key) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
