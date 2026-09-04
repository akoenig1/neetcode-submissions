class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const heap = new MaxPriorityQueue((x) => x[0]);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            heap.enqueue([nums[i], i]);

            if (i >= k - 1) {
                // once window is size k, remove top of heap
                // while index is < left index of window
                while (heap.front()[1] <= i - k) {
                    heap.dequeue();
                }

                res.push(heap.front()[0]);
            }
        }

        return res;
    }
}
