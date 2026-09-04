class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0;
        const stack = [];

        for (let r = 0; r < heights.length; r++) {
            let start = r;
            while (stack.length > 0 && stack[stack.length - 1][1] > heights[r]) {
                const [l, height] = stack.pop();
                const width = r - l;
                const area = height * width;
                max = Math.max(max, area);
                start = l;
            }
            stack.push([start, heights[r]]);
        }

        while (stack.length > 0) {
            const [l, height] = stack.pop();
            const width = heights.length - l;
            const area = height * width;
            max = Math.max(max, area);
        }

        return max;
    }
}
