class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const ints = new Set();

        for (let num of nums) {
            if (ints.has(num)) return true;
            ints.add(num); 
        }

        return false;
    }
}
