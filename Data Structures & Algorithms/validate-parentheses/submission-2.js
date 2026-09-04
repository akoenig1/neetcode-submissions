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

        for (let c of s) {
            if (stack.length > 0) {
                if (pairs[c] != null) {
                    stack.push(c);
                } else {
                    const open = stack.pop();
                    if (pairs[open] !== c) return false;
                }
            } else {
                if (pairs[c] != null) {
                    stack.push(c);
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
