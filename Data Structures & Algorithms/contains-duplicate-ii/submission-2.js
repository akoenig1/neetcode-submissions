class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        if (k === 0) return false;

        let lastSeenIndex = {};
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (
                lastSeenIndex[num] !== undefined && 
                lastSeenIndex[num] >= i - k
            ) return true;
            lastSeenIndex[num] = i; 
        }
        
        return false;
    }
}
