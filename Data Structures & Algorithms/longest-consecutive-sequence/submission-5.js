class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const numSet = new Set(nums);
        
        for (const num of nums) {
            let curr = num;
            let len = 1;
            while (numSet.has(curr+1)) {
                len++;
                curr++;
            }
            longest = Math.max(longest, len);
        }

        return longest;
    }
}
