class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        if (n === 1) return true;

        let slow = n;
        let fast = this.sumOfSquares(n);

        while (slow !== fast) {
            if (slow === 1 || fast === 1) return true;
            slow = this.sumOfSquares(slow);
            fast = this.sumOfSquares(this.sumOfSquares(fast));
        }

        return false;
    }

    sumOfSquares(n) {
        let sum = 0;

        while (n > 0) {
            let digit = n % 10;
            digit = digit ** 2;
            sum += digit;
            n = Math.floor(n / 10);
        }

        return sum;
    }
}
