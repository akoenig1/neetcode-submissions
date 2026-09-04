class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length);

        for (let i = 0; i < temperatures.length; i++) {
            let days = 0;
            for (let j = i + 1; j < temperatures.length; j++) {
                days++;
                if (temperatures[j] > temperatures[i]) break;
                if (j === temperatures.length - 1) days = 0;
            }
            res[i] = days
        }

        return res;
    }
}
