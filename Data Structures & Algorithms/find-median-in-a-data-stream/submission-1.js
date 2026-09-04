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
        if (this.first.size() > this.second.size()) {
            this.second.push(num);
        } else {
            this.first.push(num);
        }
        
        while (!this.first.isEmpty() && !this.second.isEmpty() && this.first.front() > this.second.front()) {
            const top = this.first.pop();
            const bottom = this.second.pop();
            if (bottom) this.first.push(bottom);
            if (top) this.second.push(top);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.first.size() === this.second.size()) {
            return (this.first.front() + this.second.front()) / 2;
        } else {
            return this.first.front();
        }
    }
}
