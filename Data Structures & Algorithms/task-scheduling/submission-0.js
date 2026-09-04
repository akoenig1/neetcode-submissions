class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const counts = new Array(26).fill(0);
        for (const task of tasks) {
            counts[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }

        const heap = new MaxPriorityQueue();
        for (let i = 0; i < 26; i++) {
            if (counts[i] > 0) heap.push(counts[i]);
        }

        let cycles = 0;
        const q = new Queue();

        while (heap.size() > 0 || q.size() > 0) {
            cycles++;

            if (heap.size() > 0) {
                const count = heap.dequeue() - 1;
                if (count > 0) q.push([count, cycles + n])
            }

            if (q.size() > 0 && q.front()[1] === cycles) {
                heap.push(q.pop()[0]);
            }
        }

        return cycles;
    }
}
