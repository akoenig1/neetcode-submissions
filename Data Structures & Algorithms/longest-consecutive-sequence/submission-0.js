class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const numSet = new Set(nums);

        for (let num of nums) {
            if (!numSet.has(num)) continue;

            let length = 1;
            let left = num - 1;
            let right = num + 1;

            if (numSet.has(left)) continue;
            while (numSet.has(right)) {
                length++;
                right++;
            }
            longest = Math.max(longest, length);
        }

        return longest;
    }
}
