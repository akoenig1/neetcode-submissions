class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {        
        const visited = new Set();
        
        while (!visited.has(n)) {
            visited.add(n);
            n = this.sumOfSquares(n);
            if (n === 1) return true;
        }

        return false;
    }

    sumOfSquares(n) {
        let sum = 0;
        while (n > 0) {
            sum += (n % 10) ** 2;
            n = Math.floor(n / 10);
        }
        return sum;
    }
}
