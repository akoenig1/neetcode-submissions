class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        if (n === 1) return nums[0];

        const linearRob = (l, r) => {
            let robFirst = 0;
            let robSecond = 0;

            for (let i = l; i <= r; i++) {
                const temp = Math.max(nums[i] + robFirst, robSecond);
                robFirst = robSecond;
                robSecond = temp;
            }

            return robSecond;
        }

        return Math.max(
            linearRob(0, n-2),
            linearRob(1, n-1)
        )
    }
}
