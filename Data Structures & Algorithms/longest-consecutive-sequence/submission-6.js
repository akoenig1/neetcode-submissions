class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const uniqueNums = new Set(nums);

        let longest = 0;

        for (let num of nums) {
            if (!uniqueNums.has(num - 1)) {
                let len = 0;
                while (uniqueNums.has(num)) {
                    num++;
                    len++;
                }
                longest = Math.max(longest, len);
            }
        }

        return longest;
    }
}
