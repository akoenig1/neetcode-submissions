class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let candidate = nums[0];
        let count = 0;

        for (const num of nums) {
            num === candidate ? count++ : count--;

            if (count < 0) {
                candidate = num;
                count = 1;
            }
        }

        return candidate;
    }
}
