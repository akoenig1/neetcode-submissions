class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {        
        const memo = {};

        const decode = (i) => {
            if (memo[i] !== undefined) return memo[i];
            
            if (i === s.length) return 1;
            if (i > s.length || s[i] === '0') return 0;

            let res = decode(i + 1);
            
            const combined = parseInt(`${s[i]}${s[i+1]}`);
            if (combined <= 26) res += decode(i + 2);

            memo[i] = res;
            return res;
        }

        return decode(0);
    }
}
