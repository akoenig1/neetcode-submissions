class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let max = 0;

        let l = 0;
        let r = height.length - 1;
        let leftMax = height[l];
        let rightMax = height[r];

        while (l < r) {
            if (leftMax <= rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                max += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                max += rightMax - height[r];
            }
        }

        return max;
    }
}
