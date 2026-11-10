class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const res = [];
        const n = nums.length;
        const ONE_THIRD = Math.floor(n / 3);

        let count1 = 0;
        let candidate1 = -1;
        let count2 = 0;
        let candidate2 = -1;

        for (const num of nums) {
            if (num === candidate1) {
                count1++;
            } else if (num === candidate2) {
                count2++;
            } else if (count1 === 0) {
                candidate1 = num;
                count1 = 1;
            } else if (count2 === 0) {
                candidate2 = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }

        let freq1 = 0;
        let freq2 = 0;
        for (const num of nums) {
            if (num === candidate1) freq1++;
            if (num === candidate2) freq2++;
        }

        if (freq1 > ONE_THIRD) res.push(candidate1);
        if (freq2 > ONE_THIRD) res.push(candidate2);

        return res;
    }
}
