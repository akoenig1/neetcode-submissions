class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSort(nums, 0, nums.length - 1);
        return nums;
    }

    mergeSort(nums, l, r) {
        if (r <= l) return;
        const m = l + Math.floor((r - l) / 2);
        this.mergeSort(nums, l, m);
        this.mergeSort(nums, m + 1, r);
        this.merge(nums, l, m, r);
    }

    merge(nums, l, m, r) {
        const temp = [];
        let i = l;
        let j = m + 1;

        while (i <= m && j <= r) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i++]);
            } else {
                temp.push(nums[j++]);
            }
        }

        while (i <= m) temp.push(nums[i++]);
        while (j <= r) temp.push(nums[j++]);

        for (let i = l; i <= r; i++) {
            nums[i] = temp[i - l];
        }
    }
}
