class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            '(': ')',
            '[': ']',
            '{': '}'
        }

        const stack = [];

        for (const char of s) {
            if (pairs[char]) {
                stack.push(char);
            } else {
                if (stack.length === 0) return false;
                const openBracket = stack.pop();
                if (pairs[openBracket] !== char) return false;
            }
        }

        return stack.length === 0;
    }
}
