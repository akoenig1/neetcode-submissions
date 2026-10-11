class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = new Array(n+1).fill(0);
        memo[1] = 1;
        memo[2] = 2;

        for (let i = 3; i <= n; i++) {
            memo[i] = memo[i-1] + memo[i-2];
        } 

        return memo[n];
    }
}
