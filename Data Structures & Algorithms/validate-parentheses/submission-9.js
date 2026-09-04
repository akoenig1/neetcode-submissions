class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const validPairs = {
            ']': '[',
            '}': '{',
            ')': '('
        };

        for (const c of s) {
            if (validPairs[c]) {
                if (
                    validPairs[c] !== stack[stack.length - 1]
                    || stack.length === 0
                ) return false;
                stack.pop();
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
