class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        const add = (a, b) => a + b;
        const subtract = (a, b) => b - a;
        const multiply = (a, b) => a * b;
        const divide = (a, b) => Math.trunc(b / a);

        const operators = {
            '+': add,
            '-': subtract,
            '*': multiply,
            '/': divide
        }

        for (const t of tokens) {
            if (operators[t]) {
                const a = stack.pop();
                const b = stack.pop();
                const res = operators[t](a, b);
                stack.push(res);
            } else {
                stack.push(parseInt(t));
            }
        }

        return stack[0];
    }
}
