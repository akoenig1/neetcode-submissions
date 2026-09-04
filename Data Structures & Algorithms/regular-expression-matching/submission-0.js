class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const m = s.length;
        const n = p.length;
        const cache = Array.from(
            { length: m + 1 },
            () => Array(n + 1).fill(null)
        );

        const dfs = (i, j) => {
            if (cache[i][j] !== null) return cache[i][j];
            
            // both exhausted
            if (i >= m && j >= n) return true;
            // p is exhausted, nothing left to complete s with
            if (j >= n) return false;

            const match = i < m && (s[i] === p[j] || p[j] === '.');
            
            if (j + 1 < n && p[j+1] === '*') {
                // skip * or (if match) use * 
                cache[i][j] = dfs(i, j+2) || (match && dfs(i+1, j))
                return cache[i][j];
            }
            
            // match with no * after p[j], advance both pointers
            if (match) {
                cache[i][j] = dfs(i+1, j+1);
                return cache[i][j];
            }

            // no matches
            cache[i][j] = false;
            return cache[i][j];
        }

        return dfs(0, 0);
    }
}
