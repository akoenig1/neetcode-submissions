class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const n = nums.length;
        k = k % n;

        for (let i = 0; i < k; i++) {
            const popped = nums.pop();
            nums.unshift(popped);
        }
    }
}
