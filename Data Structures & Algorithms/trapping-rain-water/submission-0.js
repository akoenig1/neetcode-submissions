class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let trapped = 0;
        let i = 0;
        let l = 0;
        let r = height.length - 1;
        let maxLeft = height[l];
        let maxRight = height[r];
        
        while (l < r) {
            const minHeight = Math.min(maxLeft, maxRight);
            if (minHeight - height[i] > 0) trapped += minHeight - height[i];
            if (maxLeft < maxRight) {
                l++;
                i = l;
                maxLeft = Math.max(maxLeft, height[l]);
            } else {
                r--;
                i = r;
                maxRight = Math.max(maxRight, height[r]);
            }
        }

        return trapped;
    }
}
