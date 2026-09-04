class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = new MinPriorityQueue();
        this.k = k;

        for (const num of nums) {
            this.heap.enqueue(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.enqueue(val);

        while(this.heap.size() > this.k) {
            this.heap.dequeue();
        }

        return this.heap.front();
    }
}
