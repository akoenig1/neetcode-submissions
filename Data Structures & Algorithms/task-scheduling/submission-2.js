class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const counts = new Array(26).fill(0);
        for (const task of tasks) {
            const i = task.charCodeAt(0) - 'A'.charCodeAt(0);
            counts[i]++;
        }

        counts.sort((a, b) => a - b);
        const maxF = counts[25];
        let idleCycles = (maxF - 1) * n;

        for (let i = 24; i >= 0; i--) {
            idleCycles -= Math.min(maxF - 1, counts[i]);
        }

        return Math.max(0, idleCycles) + tasks.length;
    }
}
