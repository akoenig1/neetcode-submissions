class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.stack.length === 1) {
            this.minStack.push(val);
        } else {
            const topIndex = this.minStack.length - 1;
            const min = Math.min(val, this.minStack[topIndex]);
            this.minStack.push(min);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        const topIndex = this.stack.length - 1;
        return this.stack[topIndex];
    }

    /**
     * @return {number}
     */
    getMin() {
        const topIndex = this.minStack.length - 1;
        return this.minStack[topIndex];
    }
}
