class ListNode {
    constructor(key = -1, value = -1, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class MyHashMap {
    HASH_SIZE = 1009;
    
    constructor() {
        this.hmap = Array.from(
            { length: this.HASH_SIZE }, 
            () => new ListNode()
        );
    }

    hash(key) {
        return key % this.HASH_SIZE;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const hashIndex = this.hash(key);
        let curr = this.hmap[hashIndex];
        while (curr.next) {
            curr = curr.next;
            if (curr.key === key) {
                curr.value = value;
                return;
            }
        }
        curr.next = new ListNode(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const hashIndex = this.hash(key);
        let curr = this.hmap[hashIndex];
        while (curr) {
            if (curr.key === key) {
                return curr.value;
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
        const hashIndex = this.hash(key);
        let curr = this.hmap[hashIndex];
        while (curr.next) {
            if (curr.next.key === key) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
        return;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
