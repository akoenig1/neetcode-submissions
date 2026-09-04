class FreqStack {
    constructor() {
        this.mostFreq = 0;
        this.freqs = {};
        this.freqStacks = {};
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const prevFreq = this.freqs[val] || 0;
        const newFreq = prevFreq + 1;

        this.freqs[val] = newFreq;
        this.mostFreq = Math.max(this.mostFreq, newFreq);

        if (!this.freqStacks[newFreq]) this.freqStacks[newFreq] = [];
        this.freqStacks[newFreq].push(val);

    }

    /**
     * @return {number}
     */
    pop() {
        const highestFreq = this.mostFreq;
        const val = this.freqStacks[highestFreq].pop();

        if (this.freqStacks[highestFreq].length === 0) {
            this.mostFreq--;
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
