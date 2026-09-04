class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (let num of nums) {
            if (numSet.has(num - 1)) continue;

            let len = 1;
            while (numSet.has(num + 1)) {
                len++;
                num++;
            }

            longest = Math.max(longest, len);
        }

        return longest;
    }
}
