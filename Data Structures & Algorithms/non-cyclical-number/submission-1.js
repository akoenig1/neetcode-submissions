class Solution {
    constructor() {
        this.seen = new Set();
    }
    
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const digits = n.toString().split('');
        const sum = digits.reduce((sum, d) => sum += (parseInt(d) ** 2), 0);
        console.log(sum, this.seen)
        
        if (sum === 1) return true;
        if (this.seen.has(sum)) return false;

        this.seen.add(sum);
        return this.isHappy(sum);
    }
}
