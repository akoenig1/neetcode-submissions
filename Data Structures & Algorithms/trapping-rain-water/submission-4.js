class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0;

        let ml = 0;
        let mr = 0;
        const maxL = new Array(height.length).fill(0);
        const maxR = new Array(height.length).fill(0);

        for (let l = 0; l < height.length; l++) {
            const r = height.length - 1 - l;
            ml = Math.max(ml, height[l]);
            mr = Math.max(mr, height[r]);
            maxL[l] = ml;
            maxR[r] = mr;
        }

        for (let i = 0; i < height.length; i++) {
            const trapped = Math.min(maxL[i], maxR[i]) - height[i];
            if (trapped > 0) res += trapped;
        }

        return res;
    }
}
