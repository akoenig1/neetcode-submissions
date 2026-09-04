class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            const num = nums[mid];
            
            if (target < num) {
                r = mid - 1;
            } else if (target > num) {
                l = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    }
}
