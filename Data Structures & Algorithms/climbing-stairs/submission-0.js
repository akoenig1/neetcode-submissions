class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = {};
        
        const dfs = (i) => {
            if (memo[i]) return memo[i];
            if (i <= 2) return i;

            const res = dfs(i - 1) + dfs(i - 2);
            memo[i] = res;
            
            return res;
        }

        return dfs(n);
    }
}
