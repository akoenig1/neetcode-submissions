class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            '(': ')',
            '[': ']',
            '{': '}',
        };

        const stack = [];
        for (const c of s) {
            if (pairs[c]) {
                stack.push(c);
            } else {
                if (stack.length === 0 || c !== pairs[stack.pop()]) return false;
            }
        }

        return stack.length === 0;
    }
}
