class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const q = new Queue();

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) q.enqueue([r, c, 0])
            }
        }

        while (!q.isEmpty()) {
            const [r, c, distance] = q.dequeue();
            if (
                r < 0 ||
                r >= ROWS ||
                c < 0 ||
                c >= COLS ||
                grid[r][c] === -1
            ) continue;

            if (grid[r][c] >= distance) {
                grid[r][c] = distance;
                q.enqueue([r+1, c, distance + 1]);
                q.enqueue([r-1, c, distance + 1]);
                q.enqueue([r, c+1, distance + 1]);
                q.enqueue([r, c-1, distance + 1]);
            }
        }
    }
}
