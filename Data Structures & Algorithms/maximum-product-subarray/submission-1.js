class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = nums[0];
        let currMax = 1;  
        let currMin = 1;  

        for (const num of nums) {
            let tempMax = currMax * num;
            currMax = Math.max(num, Math.max(currMax * num, currMin * num));
            currMin = Math.min(num, Math.min(currMin * num, tempMax));
            max = Math.max(max, currMax);
        }

        return max;
    }
}
