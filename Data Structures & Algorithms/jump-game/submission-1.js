class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let farthest = 0;

        // early return if i exceeds farthest
        for (let i = 0; i <= farthest; i++) {
            // greedy invariant = farthest cell you can reach from this cell or a previous cell
            farthest = Math.max(farthest, i + nums[i]);
            if (farthest >= nums.length - 1) return true;
        }

        return false;
    }
}
