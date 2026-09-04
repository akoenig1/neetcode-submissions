class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums) {
        const res = [];
        let totalProduct = 1;
        let zeroProduct = 1;
        let zeroCount = 0;

        for (let num of nums) {
            totalProduct *= num;
            if (num === 0) {
                zeroCount++;
            } else {
                zeroProduct *= num;
            }
        }

        for (let num of nums) {
            if (num === 0) {
                if (zeroCount === 1) {
                    res.push(zeroProduct);
                } else {
                    res.push(0);
                }
            } else {
                const product = totalProduct / num;
                res.push(product);
            }
        }

        return res;
    }
}
