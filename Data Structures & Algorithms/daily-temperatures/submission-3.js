class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const currTemp = temperatures[i];

            while (stack.length > 0 && currTemp > temperatures[stack[stack.length-1]]) {
                const j = stack.pop();
                const diff = i - j;
                res[j] = diff;
            }
            
            stack.push(i);
        }

        return res;
    }
}
