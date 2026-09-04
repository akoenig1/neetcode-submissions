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
        const min = this.getMin();
        val > min ? this.minStack.push(min) : this.minStack.push(val);
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
        const top = this.stack.length - 1;
        return this.stack[top];
    }

    /**
     * @return {number}
     */
    getMin() {
        const top = this.minStack.length - 1;
        return this.minStack[top];
    }
}
