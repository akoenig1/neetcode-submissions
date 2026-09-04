class StockSpanner {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let days = 1;

        while (
            this.stack.length && 
            this.stack[this.stack.length - 1][0] <= price
        ) {
            days += this.stack[this.stack.length - 1][1];
            this.stack.pop();
        }
        this.stack.push([price, days]);

        return days;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
