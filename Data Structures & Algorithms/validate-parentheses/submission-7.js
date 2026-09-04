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
        };

        const stack = [];
        for (const c of s) {
            if (pairs[c]) {
                stack.push(c);
            } else {
                if (stack.length === 0) return false;
                const open = stack.pop();
                if (pairs[open] !== c) return false;
            }
        }

        return stack.length > 0 ? false : true;
    }
}
