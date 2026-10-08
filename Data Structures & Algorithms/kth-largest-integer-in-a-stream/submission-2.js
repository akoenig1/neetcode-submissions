class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = new MinPriorityQueue();

        for (const num of nums) {
            this.heap.enqueue(num);
            if (this.heap.size() > this.k) {
                this.heap.dequeue();
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.enqueue(val);
        while (this.heap.size() > this.k) {
            this.heap.dequeue();
        }
        return this.heap.front();
    }
}
