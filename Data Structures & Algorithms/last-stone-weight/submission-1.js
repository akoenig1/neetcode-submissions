class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();
        stones.forEach(stone => maxHeap.enqueue(stone));

        while (maxHeap.size() > 1) {
            const x = maxHeap.dequeue();
            const y = maxHeap.dequeue();
            if (y < x) {
                maxHeap.enqueue(x - y);
            }
        }

        return maxHeap.front() || 0;
    }
}
