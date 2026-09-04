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
            const h = Math.min(heights[l], heights[r]);
            const w = r - l;
            const area = h * w;
            max = Math.max(max, area);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }


        return max;
    }
}
