class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        const backtrack = (str, open, closed) => {
            if (open === n && closed === n) {
                res.push(str);
                return;
            }

            if (open < n) {
                backtrack(str + '(', open + 1, closed);
            }

            if (closed < open) {
                backtrack(str + ')', open, closed + 1);
            }
        }

        backtrack('', 0, 0);

        return res;
    }
}
