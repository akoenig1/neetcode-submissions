class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const n = nums.length;

        let i = 0;
        while (i <= n) {
            if (
                nums[i] > 0 &&
                nums[i] <= n &&
                nums[i] !== nums[nums[i] - 1]
            ) {
                const index = nums[i] - 1;
                [nums[i], nums[index]] = [nums[index], nums[i]];
            } else {
                i++;
            }
        }

        i = 0;
        while (i < n) {
            if (nums[i] !== i + 1) break;
            i++;
        }
        return i + 1;
    }
}
