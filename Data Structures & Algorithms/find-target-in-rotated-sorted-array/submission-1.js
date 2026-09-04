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
            const mid = Math.floor((r + l) / 2);
            if (nums[mid] === target) return mid;

            // LEFT IS SORTED HALF
            if (nums[l] <= nums[mid]) {
                // TARGET OUTSIDE OF LEFT BOUNDS, MOVE TO UNSORTED HALF
                if (target < nums[l] || target > nums[mid]) {
                    l = mid + 1;
                // TARGET IN BOUNDS, STAY IN SORTED HALF
                } else {
                    r = mid - 1;
                }
            // RIGHT IS SORTED HALF
            } else {
                // TARGET OUTSIDE OF RIGHT BOUNDS, MOVE TO UNSORTED HALF
                if (target > nums[r] || target < nums[mid]) {
                    r = mid - 1;
                // TARGET IN BOUNDS, STAY IN SORTED HALF
                } else {
                    l = mid + 1;
                }
            }
        }

        return -1;
    }
}
