class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let robFirst = 0; // i - 2 house
        let robSecond = 0; // i - 1 house

        // in each iteration, we are passing along not just the amount
        // that can be robbed from the first or second house, but the 
        // total amount that could be robbed up to that point by
        // choosing either house
        for (const num of nums) {
            // decide if its better to rob i-1 or this house and i-2
            const temp = Math.max(num + robFirst, robSecond);
            robFirst = robSecond; // move i-2 to i-1
            robSecond = temp; // move i-i to best of i-1 or this house + i-2
        }

        // by the end of the block this variable holds the value for the best decisions
        return robSecond;
    }
}
