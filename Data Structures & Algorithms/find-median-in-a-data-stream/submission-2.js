class MedianFinder {
    constructor() {
        this.first = new MaxPriorityQueue();
        this.second = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.second.isEmpty() || num > this.second.front()) {
            this.second.push(num);
        } else {
            this.first.push(num);
        }
        
        if (this.first.size() > this.second.size() + 1) {
            this.second.push(this.first.pop());
        } else if (this.second.size() > this.first.size() + 1) {
            this.first.push(this.second.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.first.size() > this.second.size()) {
            return this.first.front();
        } else if (this.first.size() < this.second.size()) {
            return this.second.front();
        } else {
            return (this.first.front() + this.second.front()) / 2;
        }
    }
}
