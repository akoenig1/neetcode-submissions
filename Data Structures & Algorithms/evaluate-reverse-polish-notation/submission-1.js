class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let token of tokens) {
            switch(token) {
                case '+':
                    stack.push(stack.pop() + stack.pop());
                    break;
                case '*':
                    stack.push(stack.pop() * stack.pop());
                    break;
                case '-':
                    const a = stack.pop();
                    const b = stack.pop();
                    stack.push(b - a);
                    break;
                case '/':
                    const c = stack.pop();
                    const d = stack.pop();
                    stack.push(Math.trunc(d / c));
                    break
                default:
                    stack.push(parseInt(token));
            }
        }

        return stack.pop();
    }
}
