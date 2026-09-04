class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        
        const add = (x, y) => x + y;
        const subtract = (x, y) => x - y;
        const multiply = (x, y) => x * y;
        const divide = (x, y) => Math.trunc(x / y);

        const ops = {
            '+': add,
            '-': subtract,
            '*': multiply,
            '/': divide
        };


        for (const token of tokens) {
            if (!ops[token]) {
                stack.push(parseInt(token));
            } else {
                const op = ops[token];
                const y = stack.pop();
                const x = stack.pop();
                const res = op(x, y);
                stack.push(res);
            }
        }

        return stack[0];
    }
}
