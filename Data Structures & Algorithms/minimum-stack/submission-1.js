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
        
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            const min = Math.min(val, this.getMin());
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
        const index = this.stack.length - 1;
        return this.stack[index];
    }

    /**
     * @return {number}
     */
    getMin() {
        const index = this.minStack.length - 1;
        return this.minStack[index];
    }
}
