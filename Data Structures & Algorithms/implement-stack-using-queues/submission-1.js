class MyStack {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        while (this.q1.size() > 0) {
            this.q2.enqueue(this.q1.dequeue())
        }
        this.q1.enqueue(x);
        while (this.q2.size() > 0) {
            this.q1.enqueue(this.q2.dequeue())
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.q1.dequeue()
    }

    /**
     * @return {number}
     */
    top() {
        return this.q1.front();
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q1.size() === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
