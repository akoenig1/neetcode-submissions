class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let trapped = 0;
        let l = 0;
        let r = height.length - 1;
        let maxLeft = height[l];
        let maxRight = height[r];
        
        while (l < r) {
            if (maxLeft < maxRight) {
                l++;
                maxLeft = Math.max(maxLeft, height[l]);
                trapped += maxLeft - height[l];
            } else {
                r--;
                maxRight = Math.max(maxRight, height[r]);
                trapped += maxRight - height[r];
            }
        }

        return trapped;
    }
}
