class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let min = Infinity;

        while (l <= r) {
            if(nums[l] < nums[r]) {
                min = Math.min(min, nums[l]);
                break;
            }

            const mid = Math.floor((l + r) / 2);
            const num = nums[mid];
            min = Math.min(min, num);

            if (nums[l] <= num) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return min;
    }
}
