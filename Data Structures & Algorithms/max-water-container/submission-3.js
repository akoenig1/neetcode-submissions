class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;

        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            const height = Math.min(heights[l], heights[r]);
            const width = r - l;
            const area = height * width;
            res = Math.max(area, res);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return res;
    }
}
