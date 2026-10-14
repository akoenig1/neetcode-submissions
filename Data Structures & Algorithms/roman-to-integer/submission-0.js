class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {
        const value = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
        
        let sum = 0;
        let i = 0;
        
        while (i < s.length) {
            if (i < s.length && value[s[i]] < value[s[i+1]]) {
                sum += value[s[i+1]] - value[s[i]];
                i += 2;
            } else {
                sum += value[s[i]];
                i++;
            }
        }

        return sum;
    }
}
