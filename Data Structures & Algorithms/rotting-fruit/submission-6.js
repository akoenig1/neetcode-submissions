class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const DIRS = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];
        
        let freshCount = 0;
        let minutes = 0;

        const q = new Queue();

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) freshCount++;
                if (grid[r][c] === 2) q.enqueue([r, c]);
            }
        }

        while(freshCount > 0 && !q.isEmpty()) {
            const len = q.size();
            for (let i = 0; i < len; i++) {
                const [r, c] = q.dequeue();

                for (const [dr, dc] of DIRS) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr >= 0 &&
                        nr < ROWS &&
                        nc >= 0 &&
                        nc < COLS &&
                        grid[nr][nc] === 1
                    ) {
                        grid[nr][nc] = 2;
                        q.enqueue([nr, nc]);
                        freshCount--;
                    }
                }
            }
            
            minutes++;
        }

        return freshCount === 0 ? minutes : -1;
    }
}
