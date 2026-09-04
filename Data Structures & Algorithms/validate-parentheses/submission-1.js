class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            '(': ')',
            '{': '}',
            '[': ']'
        }
        const stack = [];

        for (const c of s) {
            if (pairs[c] != null) {
                stack.push(c);
            } else {
                if (stack.length === 0) return false;
                const openBracket = stack.pop();
                if (pairs[openBracket] !== c) return false;
            }
        }

        if (stack.length > 0) return false;

        return true;
    }
}
