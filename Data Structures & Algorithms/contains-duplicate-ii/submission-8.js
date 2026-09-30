class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const nearby = new Set();
        const n = nums.length;
        let l = 0;

        for (let r = 0; r < n; r++) {
            if (r - l > k) {
                nearby.delete(nums[l]);
                l++;
            }
            
            const num = nums[r];
            if (nearby.has(num)) return true;
            nearby.add(num);
        }

        return false;
    }
}
