class FreqStack {
    constructor() {
        this.maxFreq = 0;
        this.freqs = {};
        this.stacks = {};
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const prevFreq = this.freqs[val] || 0;
        const newFreq = prevFreq + 1;

        this.freqs[val] = newFreq;
        this.maxFreq = Math.max(this.maxFreq, newFreq);

        if (!this.stacks[newFreq]) this.stacks[newFreq] = [];
        this.stacks[newFreq].push(val);

    }

    /**
     * @return {number}
     */
    pop() {
        const val = this.stacks[this.maxFreq].pop();

        if (this.stacks[this.maxFreq].length === 0) {
            this.maxFreq--;
        }

        this.freqs[val]--;

        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
