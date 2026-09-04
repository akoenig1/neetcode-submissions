class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freqs = Array.from({ length: 26 }).fill(0);
        let maxFreq = 0;
        for (const task of tasks) {
            const i = task.charCodeAt(0) - 'A'.charCodeAt(0);
            freqs[i]++;
            maxFreq = Math.max(maxFreq, freqs[i]);
        }

        for (let i = 0; i < 26; i++) {
            if (freqs[i] === maxFreq) {
                freqs[i] = 0;
                break;
            }
        }

        const gaps = maxFreq - 1;
        let idleSlots = gaps * n;
        for (let i = 0; i < 26; i++) {
            idleSlots -= Math.min(freqs[i], maxFreq - 1);
        }

        return Math.max(0, idleSlots) + tasks.length;
    }
}
