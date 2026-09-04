class MinStack {
    constructor() {
        this.stack = [];
        this.mins = [];
        this.length = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        const currMin = this.length > 0 ? this.mins[this.length - 1] : Number.POSITIVE_INFINITY;
        const min = Math.min(val, currMin);
        this.mins.push(min);

        this.length++;
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.mins.pop();
        this.length--;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.mins[this.length - 1];
    }
}
