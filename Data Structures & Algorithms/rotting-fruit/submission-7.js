class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const DIRS = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];

        let freshFruit = 0;
        let q = new Queue();

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) freshFruit++;
                if (grid[r][c] === 2) q.enqueue([r, c]);
            }
        }

        let minutes = 0;
        while (freshFruit > 0 && !q.isEmpty()) {
            const len = q.size();
            for (let i = 0; i < len; i++) {
                const [r, c] = q.dequeue();

                for (const [dr, dc] of DIRS) {
                    const nr = dr + r;
                    const nc = dc + c;
                    if (
                        nr >= 0 &&
                        nr < ROWS &&
                        nc >= 0 &&
                        nc < COLS &&
                        grid[nr][nc] === 1
                    ) {
                        grid[nr][nc] = 2;
                        freshFruit--;
                        q.enqueue([nr, nc]);
                    }
                }
            }
            minutes++;
        }

        return freshFruit === 0 ? minutes : -1
    }
}
