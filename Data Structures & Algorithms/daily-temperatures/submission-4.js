class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const daysUntilWarmer = new Array(n).fill(0);
        const stack = [];

        for (let i = 0; i < n; i++) {
            const temp = temperatures[i];
            while (
                stack.length > 0 &&
                temp > temperatures[stack[stack.length - 1]]
            ) {
                const index = stack.pop();
                daysUntilWarmer[index] = i - index;
            }
            stack.push(i);
        }

        return daysUntilWarmer;        
    }
}
