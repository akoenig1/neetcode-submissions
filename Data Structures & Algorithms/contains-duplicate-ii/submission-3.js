class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const n = nums.length;
        for (let l = 0; l < n - 1; l++) {
            for (let r = l + 1; r <= l + k; r++) {
                if (nums[l] === nums[r]) return true;
            }
        }
        return false;
        // outer loop increment l
        // inner loop increment r until r - l > k
        // compare nums[l] and nums[r] at each iteration of inner loop
    }
}
