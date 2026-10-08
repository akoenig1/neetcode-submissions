class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxPriorityQueue();
        for (const stone of stones) {
            heap.enqueue(stone);
        }
        
        while (heap.size() > 1) {
            const heaviestStone = heap.dequeue();
            const secondHeaviestStone = heap.dequeue();

            if (heaviestStone > secondHeaviestStone) {
                heap.enqueue(heaviestStone - secondHeaviestStone);
            }
        }

        return heap.size() === 1 ? heap.front() : 0;
    }
}
