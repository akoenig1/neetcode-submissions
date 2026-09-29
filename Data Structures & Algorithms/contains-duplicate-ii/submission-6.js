class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const numsInWindow = new Set();
        const n = nums.length;
        let l = 0;

        for (let r = 0; r < n; r++) {
            if (r - l > k) {
                numsInWindow.delete(nums[l]);
                l++;
            }
            
            const num = nums[r];
            if (numsInWindow.has(num)) {
                return true;
            } else {
                numsInWindow.add(num);
            }
        }
        
        return false;
    }
}
