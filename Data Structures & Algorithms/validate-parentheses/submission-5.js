class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let pairs = {
            '(': ')',
            '[': ']',
            '{': '}'
        }

        const stack = [];

        for (let c of s) {
            if (pairs[c] != null) {
                stack.push(c);
            } else {
                if (stack.length === 0) {
                    return false;
                } else {
                    const pair = stack.pop();
                    if (pairs[pair] !== c) return false;
                }
            }
        }

        return stack.length === 0;
    }
}
