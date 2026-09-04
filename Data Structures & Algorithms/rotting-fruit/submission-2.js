class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let freshFruit = 0;
        let minutes = 0;
        const q = new Queue();
        const dirs = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) freshFruit++;
                if (grid[r][c] === 2) q.enqueue([r, c]);
            }
        }

        while (freshFruit > 0 && q.size() > 0) {
            let levelSize = q.size();
            for (let i = 0; i < levelSize; i++) {
                const [r, c] = q.dequeue();

                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr < 0 ||
                        nr >= ROWS ||
                        nc < 0 ||
                        nc >= COLS ||
                        grid[nr][nc] !== 1
                    ) continue;

                    grid[nr][nc] = 2;
                    freshFruit--;
                    q.enqueue([nr, nc]);
                }
            }
            minutes++;
        }

        return freshFruit === 0 ? minutes : -1;
    }
}
