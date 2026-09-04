class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
        const res = [];
        const deque = new Deque();
        
        let l = 0;
        let r = 0;
        while (r < n) {
            // any nums in deque smaller than the current right edge 
            // of the window will never be the largest in that window
            while (deque.size() && nums[deque.back()] < nums[r]) {
                deque.popBack();
            }

            deque.pushBack(r);

            // remove front of deque if no longer in window
            if (l > deque.front()) deque.popFront();

            // add current result and slide window
            if (r + 1 >= k) {
                res.push(nums[deque.front()]);
                l++;
            }
            r++;
        }

        return res;
    }
}
