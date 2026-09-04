class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        const res = [];
        let carry = 1;

        for (let i = digits.length - 1; i >= 0; i--) {
            const sum = digits[i] + carry;
            res.unshift(sum % 10);
            if (sum < 10) carry = 0;
        }
        if (carry > 0) res.unshift(1);

        return res;
    }
}
