class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;

        let l = 0;
        let r = heights.length - 1;
        while (l < r) {
            const height = Math.min(heights[l], heights[r]);
            const width = r - l;
            const area = height * width;
            max = Math.max(max, area);

            if (heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return max;
    }
}
