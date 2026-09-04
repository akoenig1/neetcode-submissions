class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        let sum = a ^ b;
        let carry = (a & b) << 1;

        while (carry !== 0) {
            const newSum = sum ^ carry;
            carry = (sum & carry) << 1;
            sum = newSum;
        }

        return sum;
    }
}
