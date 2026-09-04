class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let one = 1;
        let two = 1;

        for (let i = 1; i < n; i++) {
            const temp = two;
            two = one + two;
            one = temp
        }

        return two;
    }
}
