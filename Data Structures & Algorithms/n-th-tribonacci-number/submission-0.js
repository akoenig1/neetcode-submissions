class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        const memo = new Array(n).fill(-1);
        memo[0] = 0;
        memo[1] = 1;
        memo[2] = 1;
        
        const dfs = (i) => {
            if (memo[i] >= 0) return memo[i];

            memo[i] = dfs(i-1) + dfs(i-2) + dfs(i-3);
            return memo[i];
        }

        return dfs(n);
    }
}
