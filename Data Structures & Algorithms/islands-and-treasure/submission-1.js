class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const dirs = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        const q = new Queue();
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) q.enqueue([r, c]);
            }
        }

        while (q.size() > 0) {
            const levelSize = q.size();
            for (let i = 0; i < levelSize; i++) {
                const [r, c] = q.dequeue();

                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr < 0 ||
                        nr >= ROWS ||
                        nc < 0 ||
                        nc >= COLS
                    ) continue;

                    if (grid[nr][nc] > ROWS * COLS) {
                        grid[nr][nc] = grid[r][c] + 1;
                        q.enqueue([nr, nc]);
                    }
                }
            }
        }
    }
}
