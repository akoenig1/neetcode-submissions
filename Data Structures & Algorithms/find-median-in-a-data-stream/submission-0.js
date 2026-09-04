class MedianFinder {
    constructor() {
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.enqueue(num);
        this.minHeap.enqueue(this.maxHeap.dequeue());

        if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        let median = this.maxHeap.front();
        if (this.minHeap.size() === this.maxHeap.size()) {
            median = (this.minHeap.front() + this.maxHeap.front()) / 2;
        }
        return median;
    }
}
