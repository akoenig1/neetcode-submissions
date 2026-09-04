class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = [];
        let curr = '';
        let k = 0;

        for (const c of s) {
            if (!isNaN(c)) {
                k *= 10;
                k += parseInt(c);
            } else if (c === '[') {
                stack.push([k, curr]);
                k = 0;
                curr = '';
            } else if (c === ']') {
                const temp = curr;
                const [count, prev] = stack.pop();
                curr = prev;
                curr += temp.repeat(count);
            } else {
                curr += c;
            }
        }

        return curr;
    }
}
