class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {
            ')': '(',
            ']': '[',
            '}': '{', 
        };

        for (const c of s) {
            if (pairs[c] !== undefined) {
                if (stack.length === 0) return false;
                const openChar = stack.pop();
                if (pairs[c] !== openChar) return false;
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
