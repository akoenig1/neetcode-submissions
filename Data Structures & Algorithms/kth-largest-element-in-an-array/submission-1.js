class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new MinPriorityQueue();
        for (const num of nums) {
            heap.push(num);
            if (heap.size() > k) heap.pop();
        }
        return heap.front();
    }
}
